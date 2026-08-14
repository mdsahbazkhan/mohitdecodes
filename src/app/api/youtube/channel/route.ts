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

    const url = new URL(`${YOUTUBE_API_BASE}/channels`);
    url.searchParams.set("part", "snippet,statistics");
    url.searchParams.set("id", channelId);
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("YouTube API error response:", response.status, errorText);
      return NextResponse.json(
        { error: `YouTube API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await safeJson(response);

    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
      return NextResponse.json(
        { error: "Channel not found." },
        { status: 404 }
      );
    }

    const channel = data.items[0];
    const snippet = channel.snippet || {};
    const statistics = channel.statistics || {};

    return NextResponse.json({
      title: snippet.title || "Unknown Channel",
      thumbnail:
        snippet.thumbnails?.high?.url ||
        snippet.thumbnails?.medium?.url ||
        snippet.thumbnails?.default?.url ||
        "",
      subscribers: formatCount(statistics.subscriberCount),
      views: formatCount(statistics.viewCount),
      videos: statistics.videoCount || "0",
    });
  } catch (error) {
    console.error("Failed to fetch YouTube channel:", error);
    return NextResponse.json(
      { error: "Failed to fetch channel data." },
      { status: 500 }
    );
  }
}
