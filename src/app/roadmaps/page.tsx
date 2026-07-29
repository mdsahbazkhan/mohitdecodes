"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { roadmaps } from "@/data/roadmaps";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Roadmaps() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Developer{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Roadmaps
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Step-by-step guides to take you from beginner to professional
              developer. Choose your path and start your journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {roadmaps.map((roadmap, i) => (
              <motion.div key={roadmap.id} variants={fadeInUp}>
                <Link
                  href={`/roadmaps/${roadmap.id}`}
                  className="group block h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div
                    className={`h-32 bg-gradient-to-br ${roadmap.color} border-b border-border flex items-center justify-center`}
                  >
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {roadmap.icon}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-3">
                      {roadmap.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {roadmap.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                      {roadmap.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {roadmap.steps.slice(0, 3).map((step, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground line-clamp-1">
                            {step.title}
                          </span>
                        </div>
                      ))}
                      {roadmap.steps.length > 3 && (
                        <p className="text-xs text-muted-foreground pl-6">
                          +{roadmap.steps.length - 3} more steps
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        {roadmap.steps.length} steps
                      </span>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View roadmap
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
