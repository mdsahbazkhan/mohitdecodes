"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { resources } from "@/data/resources";
import { ArrowRight, Download, FileText, BookOpen, HelpCircle } from "lucide-react";
import Link from "next/link";

const typeIcons = {
  cheatsheet: FileText,
  pdf: BookOpen,
  notes: BookOpen,
  interview: HelpCircle,
  tool: Download,
};

export default function ResourcesPreview() {
  const featured = resources.filter((r) => r.featured).slice(0, 4);

  return (
    <section className="py-24 bg-background section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Free{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Resources
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl">
              Download cheat sheets, notes, interview questions, and more.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4 md:mt-0 group"
            >
              View all resources
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((resource) => {
            const Icon = typeIcons[resource.type];
            return (
              <motion.div key={resource.id} variants={fadeInUp}>
                <Link
                  href={resource.downloadUrl || "/resources"}
                  className="group block h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mb-4 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    <Download className="w-4 h-4" />
                    Download
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
