import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Features from "@/components/sections/features";
import CoursesPreview from "@/components/sections/courses-preview";
import RoadmapsPreview from "@/components/sections/roadmaps-preview";
import ResourcesPreview from "@/components/sections/resources-preview";
import TopmatePreview from "@/components/sections/topmate-preview";
import Testimonials from "@/components/sections/testimonials";
import Newsletter from "@/components/sections/newsletter";
import FAQ from "@/components/sections/faq";
import { formatCount } from "@/lib/youtube";

async function getYouTubeViews() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    if (!apiKey || !channelId) return null;

    const url = new URL("https://www.googleapis.com/youtube/v3/channels");
    url.searchParams.set("part", "statistics");
    url.searchParams.set("id", channelId);
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const text = await response.text();
    if (!text) return null;

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return null;
    }

    if (!data.items || data.items.length === 0) return null;

    const viewCount = data.items[0].statistics.viewCount;
    return formatCount(viewCount) + "+ views";
  } catch {
    return null;
  }
}

async function getYouTubeStats() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    if (!apiKey || !channelId) return null;

    const url = new URL("https://www.googleapis.com/youtube/v3/channels");
    url.searchParams.set("part", "statistics");
    url.searchParams.set("id", channelId);
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const text = await response.text();
    if (!text) return null;

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return null;
    }

    if (!data.items || data.items.length === 0) return null;

    const statistics = data.items[0].statistics;
    const subscribers = formatCount(statistics.subscriberCount);
    const views = formatCount(statistics.viewCount);

    return [
      {
        label: "YouTube Subscribers",
        value: subscribers + "+",
        color: "text-red-500",
      },
      { label: "Total Views", value: views + "+", color: "text-blue-500" },
      { label: "Free Courses", value: "25+", color: "text-green-500" },
      {
        label: "Lines of Code Taught",
        value: "10M+",
        color: "text-purple-500",
      },
    ];
  } catch {
    return null;
  }
}

export default async function Home() {
  const youtubeViews = await getYouTubeViews();
  const stats = await getYouTubeStats();

  const fallbackStats = [
    { label: "YouTube Subscribers", value: "22K+", color: "text-red-500" },
    { label: "Total Views", value: "2.8M+", color: "text-blue-500" },
    { label: "Free Courses", value: "25+", color: "text-green-500" },
    { label: "Lines of Code Taught", value: "10M+", color: "text-purple-500" },
  ];

  return (
    <div>
      <Hero youtubeViews={youtubeViews || undefined} />
      <Stats stats={stats || fallbackStats} />
      <Features />
      <CoursesPreview />
      <RoadmapsPreview />
      <ResourcesPreview />
      <TopmatePreview />
      <Testimonials />
      <Newsletter />
      <FAQ />
    </div>
  );
}
