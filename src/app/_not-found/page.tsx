import { Metadata } from "next";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | MohitDecodes",
  description: "The page you are looking for does not exist.",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          custom={0}
          className="relative inline-block mb-8"
        >
          <div className="relative">
            <h1
              className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] font-bold tracking-tighter select-none"
              style={{
                background: "linear-gradient(to bottom, var(--foreground), var(--foreground) 40%, var(--muted-foreground) 60%, var(--border))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-xl"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Oops! This page got lost.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            Looks like this video hasn&apos;t been uploaded yet. The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <a
            href="https://youtube.com/@mohitdecodes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-semibold text-base hover:bg-accent/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-5 h-5" />
            Watch on YouTube
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
