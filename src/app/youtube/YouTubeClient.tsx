"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Play, Eye, Search, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Video } from "@/types";

export interface Playlist {
  id: string;
  title: string;
  description: string;
  videoCount: number;
  thumbnail: string;
  videoUrl: string;
}

interface YouTubeClientProps {
  videos: Video[];
  videoCategories: string[];
  playlists: Playlist[];
}

const MOBILE_PAGE_SIZE = 3;

export default function YouTubeClient({
  videos,
  videoCategories,
  playlists,
}: YouTubeClientProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(MOBILE_PAGE_SIZE);

  const filtered = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(search.toLowerCase()) ||
        video.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || video.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category, videos]);

  const visibleVideos = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + MOBILE_PAGE_SIZE);
  };

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              YouTube{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Channel
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Watch in-depth tutorials, project builds, and coding tips on my
              YouTube channel. New videos every week.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search videos..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(MOBILE_PAGE_SIZE);
                }}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-base outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              />
              {search && (
                <button
                  onClick={() => {
                    setSearch("");
                    setVisibleCount(MOBILE_PAGE_SIZE);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setVisibleCount(MOBILE_PAGE_SIZE);
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleVideos.map((video) => (
              <motion.div key={video.id} variants={fadeInUp}>
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                        {video.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {video.views}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {hasMore && (
            <div className="mt-12 text-center lg:hidden">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Load More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No videos found matching your criteria.
              </p>
            </div>
          )}

          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Featured Playlists</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {playlists.map((playlist, i) => (
                <motion.a
                  key={playlist.id}
                  href={playlist.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-video">
                    <img
                      src={playlist.thumbnail}
                      alt={playlist.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-12 h-12 text-white fill-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {playlist.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {playlist.description}
                    </p>
                    <span className="text-sm font-medium text-primary">
                      {playlist.videoCount} videos
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
