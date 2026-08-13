"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, Zap, BookOpen, Users } from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

interface HeroProps {
  youtubeViews?: string;
}

export default function Hero({ youtubeViews }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-background opacity-40" />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-primary mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Free Education for Everyone</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block">Master Modern</span>
          <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Web Development
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Join 500K+ developers learning React, Next.js, Node.js, and more through
          practical, project-based tutorials. From zero to job-ready developer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Start Learning
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/youtube"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-semibold text-lg hover:bg-accent/50 transition-all"
          >
            <Zap className="w-5 h-5" />
            Watch on YouTube
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { icon: BookOpen, label: "Free Courses", value: "25+" },
            { icon: Users, label: "Students", value: "500K+" },
            { icon: Zap, label: "Projects", value: "100+" },
            { icon: Sparkles, label: "YouTube", value: youtubeViews || "50M+ views" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
