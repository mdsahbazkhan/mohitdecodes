"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandMenuProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = useCallback((newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  }, [isControlled, onOpenChange]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleOpenChange(!isOpen);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, handleOpenChange]);

  const searchItems = [
    { title: "Home", href: "/", category: "Page" },
    { title: "About", href: "/about", category: "Page" },
    { title: "Courses", href: "/courses", category: "Page" },
    { title: "YouTube", href: "/youtube", category: "Page" },
    { title: "Blogs", href: "/blogs", category: "Page" },
    { title: "Roadmaps", href: "/roadmaps", category: "Page" },
    { title: "Resources", href: "/resources", category: "Page" },
    { title: "Projects", href: "/projects", category: "Page" },
    { title: "Contact", href: "/contact", category: "Page" },
    { title: "Frontend Roadmap", href: "/roadmaps/frontend", category: "Roadmap" },
    { title: "Backend Roadmap", href: "/roadmaps/backend", category: "Roadmap" },
    { title: "Full Stack Roadmap", href: "/roadmaps/fullstack", category: "Roadmap" },
    { title: "React Course", href: "/courses/react", category: "Course" },
    { title: "Next.js Course", href: "/courses/nextjs", category: "Course" },
  ];

  const filtered = query
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => handleOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-lg mx-4 bg-background border border-border rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search pages, courses, roadmaps..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-mono bg-muted border border-border rounded">
                ESC
              </kbd>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filtered.length > 0 ? (
                <div className="space-y-1">
              {filtered.map((item) => (
                <a
                      key={item.title}
                      href={item.href}
                      onClick={() => handleOpenChange(false)}
                      className={cn(
                        "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm hover:bg-accent/50 transition-colors group",
                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                      )}
                      tabIndex={0}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-foreground group-hover:text-foreground transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No results found for &quot;{query}&quot;
                </div>
              )}
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t border-border text-xs text-muted-foreground bg-muted/30">
              <span>Use arrow keys to navigate</span>
              <span>Press ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
