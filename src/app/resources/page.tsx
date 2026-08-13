"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { resources, resourceTypes, resourceCategories } from "@/data/resources";
import { Search, X, Download, FileText, BookOpen, HelpCircle, ExternalLink } from "lucide-react";

const typeIcons = {
  cheatsheet: FileText,
  pdf: BookOpen,
  notes: BookOpen,
  interview: HelpCircle,
  tool: Download,
};

const typeMap: Record<string, string> = {
  "Cheat Sheet": "cheatsheet",
  "PDF": "pdf",
  "Notes": "notes",
  "Interview": "interview",
  "Tool": "tool",
};

export default function Resources() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );
      const matchesType =
        type === "All" || resource.type === typeMap[type];
      const matchesCategory = category === "All" || resource.category === category;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [search, type, category]);

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
              Free{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Resources
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Download cheat sheets, notes, interview questions, and more to
              accelerate your learning.
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
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-base outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="px-4 py-3 bg-card border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              >
                {resourceTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === "All" ? "All Types" : t}
                  </option>
                ))}
              </select>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 bg-card border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              >
                {resourceCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((resource) => {
              const Icon = typeIcons[resource.type];
              return (
                <motion.div key={resource.id} variants={fadeInUp}>
                  <a
                    href={resource.downloadUrl || resource.externalUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 mb-4 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                        {resource.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {resource.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      {resource.downloadUrl ? (
                        <>
                          <Download className="w-4 h-4" />
                          Download
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          View Resource
                        </>
                      )}
                    </span>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No resources found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
