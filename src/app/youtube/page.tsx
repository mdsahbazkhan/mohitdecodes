import YouTubeClient from "./YouTubeClient";
import { videos as fallbackVideos, playlists, videoCategories } from "@/data/youtube";

const FEATURED_VIDEO_IDS = [
  "cHIn7PUAxlg",
  "yKuBE7TJm7M",
  "pdk60AyhMNM",
  "luxJgUVwAIM",
  "K2QhLEzYBH8",
  "fxRCoEUmq8s",
  "S2yJRqtnM7Y",
];

const VIDEO_CATEGORY_MAP: Record<string, string> = {
  cHIn7PUAxlg: "Frontend",
  yKuBE7TJm7M: "Next.js",
  pdk60AyhMNM: "Backend",
  luxJgUVwAIM: "TypeScript",
  K2QhLEzYBH8: "Backend",
  fxRCoEUmq8s: "Backend",
  S2yJRqtnM7Y: "Frontend",
};

async function getVideos() {
  try {
    const ids = FEATURED_VIDEO_IDS.join(",");
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(
      `${baseUrl}/api/youtube/videos?ids=${encodeURIComponent(ids)}`,
      { next: { revalidate: 1800 } }
    );

    if (!res.ok) {
      console.error("Failed to fetch videos:", res.status);
      return fallbackVideos;
    }

    const data = await res.json();
    const apiVideos = data.videos || [];

    if (apiVideos.length === 0) {
      return fallbackVideos;
    }

    return apiVideos.map((video: { id: string; title: string; description: string; thumbnail: string; duration: string; views: string; publishedAt: string; url: string }) => ({
      id: video.id,
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnail,
      duration: video.duration,
      views: video.views,
      publishedAt: video.publishedAt,
      category: VIDEO_CATEGORY_MAP[video.id] || "All",
      videoUrl: video.url,
    }));
  } catch (error) {
    console.error("Error fetching videos:", error);
    return fallbackVideos;
  }
}

export default async function YouTubePage() {
  const videos = await getVideos();

  return (
    <YouTubeClient
      videos={videos}
      videoCategories={videoCategories}
      playlists={playlists}
    />
  );
}
