"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { roadmaps } from "@/data/roadmaps";
import {
  ArrowLeft,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function RoadmapPage() {
  const params = useParams();
  const idFromParams = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : "";
  const roadmap = useMemo(() => roadmaps.find((r) => r.id === idFromParams), [idFromParams]);

  if (!roadmap) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-muted-foreground mb-8">Roadmap not found</p>
          <Link href="/roadmaps" className="text-primary hover:underline">
            Back to Roadmaps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Roadmaps
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className={`h-48 rounded-2xl bg-gradient-to-br ${roadmap.color} border border-border flex items-center justify-center mb-8`}
            >
              <span className="text-7xl">{roadmap.icon}</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12">
              <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-4">
                {roadmap.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {roadmap.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {roadmap.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-8">
                Learning Path ({roadmap.steps.length} steps)
              </h2>
              <div className="space-y-4">
                {roadmap.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-primary">
                          {i + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.resources.map((resource) => (
                            <a
                              key={resource}
                              href="#"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full hover:bg-muted/80 hover:text-foreground transition-colors"
                            >
                              <BookOpen className="w-3 h-3" />
                              {resource}
                            </a>
                          ))}
                        </div>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12">
              <div className="p-8 rounded-2xl border border-border bg-card text-center">
                <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
                <p className="text-muted-foreground mb-6">
                  Follow this roadmap and become a {roadmap.title.toLowerCase()}{" "}
                  in no time.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Explore Courses
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-accent/50 transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    Free Resources
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
