import { NextResponse } from "next/server";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

async function safeJson(response: Response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    console.error("Invalid JSON response:", response.status, text.slice(0, 200));
    return {};
  }
}

function formatCount(value?: string): string {
  if (!value) return "0";
  const num = parseInt(value, 10);
  if (isNaN(num)) return value;
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

function formatDuration(isoDuration?: string): string {
  if (!isoDuration) return "0:00";

  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "0:00";

  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function formatDate(isoDate?: string): string {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return "";
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function GET() {
  try {
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!channelId || !apiKey) {
      return NextResponse.json(
        { error: "YouTube API credentials are not configured." },
        { status: 500 }
      );
    }

    const channelUrl = new URL(`${YOUTUBE_API_BASE}/channels`);
    channelUrl.searchParams.set("part", "contentDetails");
    channelUrl.searchParams.set("id", channelId);
    channelUrl.searchParams.set("key", apiKey);

    const channelResponse = await fetch(channelUrl.toString(), {
      next: { revalidate: 3600 },
    });

    if (!channelResponse.ok) {
      const errorText = await channelResponse.text();
      console.error("YouTube API error response:", channelResponse.status, errorText);
      return NextResponse.json(
        { error: `YouTube API error: ${channelResponse.status}` },
        { status: channelResponse.status }
      );
    }

    const channelData = await safeJson(channelResponse);

    if (!channelData.items || !Array.isArray(channelData.items) || channelData.items.length === 0) {
      return NextResponse.json(
        { error: "Channel not found." },
        { status: 404 }
      );
    }

    const uploadsPlaylistId =
      channelData.items[0].contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      return NextResponse.json({ videos: [] });
    }

    const playlistUrl = new URL(`${YOUTUBE_API_BASE}/playlistItems`);
    playlistUrl.searchParams.set("part", "snippet");
    playlistUrl.searchParams.set("playlistId", uploadsPlaylistId);
    playlistUrl.searchParams.set("maxResults", "12");
    playlistUrl.searchParams.set("key", apiKey);

    const playlistResponse = await fetch(playlistUrl.toString(), {
      next: { revalidate: 1800 },
    });

    if (!playlistResponse.ok) {
      const errorText = await playlistResponse.text();
      console.error("YouTube API error response:", playlistResponse.status, errorText);
      return NextResponse.json(
        { error: `YouTube API error: ${playlistResponse.status}` },
        { status: playlistResponse.status }
      );
    }

    const playlistData = await safeJson(playlistResponse);

    if (!playlistData.items || !Array.isArray(playlistData.items) || playlistData.items.length === 0) {
      return NextResponse.json({ videos: [] });
    }

    const videoIds = playlistData.items
      .map((item: Record<string, unknown>) => {
        const snippet = item.snippet as { resourceId?: { videoId?: string } };
        return snippet.resourceId?.videoId;
      })
      .filter((id: string | undefined): id is string => Boolean(id));

    if (videoIds.length === 0) {
      return NextResponse.json({ videos: [] });
    }

    const videosUrl = new URL(`${YOUTUBE_API_BASE}/videos`);
    videosUrl.searchParams.set("part", "snippet,contentDetails,statistics");
    videosUrl.searchParams.set("id", videoIds.join(","));
    videosUrl.searchParams.set("key", apiKey);

    const videosResponse = await fetch(videosUrl.toString(), {
      next: { revalidate: 1800 },
    });

    if (!videosResponse.ok) {
      const errorText = await videosResponse.text();
      console.error("YouTube API error response:", videosResponse.status, errorText);
      return NextResponse.json(
        { error: `YouTube API error: ${videosResponse.status}` },
        { status: videosResponse.status }
      );
    }

    const videosData = await safeJson(videosResponse);

    if (!videosData.items || !Array.isArray(videosData.items) || videosData.items.length === 0) {
      return NextResponse.json({ videos: [] });
    }

    const videos = videosData.items.map((item: Record<string, unknown>) => {
      const snippet = (item.snippet || {}) as {
        title?: string;
        description?: string;
        publishedAt?: string;
        thumbnails?: Record<string, { url?: string }>;
      };
      const statistics = (item.statistics || {}) as {
        viewCount?: string;
        likeCount?: string;
        commentCount?: string;
      };
      const contentDetails = (item.contentDetails || {}) as {
        duration?: string;
        liveBroadcastContent?: string;
      };

      const thumbnail =
        snippet.thumbnails?.maxresdefault?.url ||
        snippet.thumbnails?.high?.url ||
        snippet.thumbnails?.medium?.url ||
        snippet.thumbnails?.default?.url ||
        "";

      return {
        id: item.id as string,
        title: snippet.title || "Untitled",
        description: snippet.description || "",
        thumbnail,
        publishedAt: formatDate(snippet.publishedAt),
        duration: formatDuration(contentDetails.duration),
        views: formatCount(statistics.viewCount) + " views",
        likes: formatCount(statistics.likeCount) + " likes",
        comments: formatCount(statistics.commentCount) + " comments",
        url: `https://www.youtube.com/watch?v=${item.id}`,
      };
    });

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Failed to fetch latest YouTube videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest videos." },
      { status: 500 }
    );
  }
}
