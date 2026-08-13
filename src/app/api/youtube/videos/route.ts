import { NextResponse } from "next/server";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

export async function GET(request: Request) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "YouTube API key is not configured." },
        { status: 500 },
      );
    }

    const { searchParams } = new URL(request.url);
    const ids = searchParams.get("ids");

    if (!ids || ids.length === 0) {
      return NextResponse.json(
        { error: "Missing video IDs." },
        { status: 400 },
      );
    }

    const videoIdArray = ids
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);

    const url = new URL(`${YOUTUBE_API_BASE}/videos`);
    url.searchParams.set("part", "snippet,contentDetails,statistics");
    url.searchParams.set("id", videoIdArray.join(","));
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("YouTube API error response:", response.status, errorText);
      return NextResponse.json(
        { error: `YouTube API error: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ videos: [] });
    }

    const videos = data.items.map((item: Record<string, unknown>) => {
      const snippet = item.snippet as {
        title: string;
        description: string;
        publishedAt: string;
        channelTitle: string;
        thumbnails: Record<string, { url: string }>;
      };
      const statistics = item.statistics as {
        viewCount: string;
        likeCount: string;
        commentCount: string;
      };
      const contentDetails = item.contentDetails as {
        duration: string;
        liveBroadcastContent: string;
      };

      const thumbnail =
        snippet.thumbnails?.maxresdefault?.url ||
        snippet.thumbnails?.high?.url ||
        snippet.thumbnails?.medium?.url ||
        snippet.thumbnails?.default?.url;

      const duration = formatDuration(contentDetails.duration);

      return {
        id: item.id as string,
        title: snippet.title,
        description: snippet.description,
        thumbnail,
        publishedAt: formatDate(snippet.publishedAt),
        channelTitle: snippet.channelTitle,
        duration,
        views: formatCount(statistics.viewCount) + " views",
        likes: formatCount(statistics.likeCount) + " likes",
        comments: formatCount(statistics.commentCount) + " comments",
        viewCount: statistics.viewCount,
        likeCount: statistics.likeCount,
        commentCount: statistics.commentCount,
        liveBroadcastContent: contentDetails.liveBroadcastContent,
        url: `https://www.youtube.com/watch?v=${item.id}`,
      };
    });

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch video data." },
      { status: 500 },
    );
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
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
