"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Search, Sparkles } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import CommandMenu from "@/components/command-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "YouTube", href: "/youtube" },
  { name: "Blogs", href: "/blogs" },
  { name: "Roadmaps", href: "/roadmaps" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const topmateLink = { name: "Topmate", href: "/topmate" };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/mohitdecode_logo.jpeg"
                alt="MohitDecodes logo"
                width={32}
                height={32}
                className="rounded-lg object-cover"
              />
              <span className="font-display font-bold text-xl tracking-tight">
                MohitDecodes
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-accent/80 rounded-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}

              <Link
                href={topmateLink.href}
                className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                <Sparkles className="h-3.5 w-3.5" />
                {topmateLink.name}
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() =>
                  document.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "k", ctrlKey: true }),
                  )
                }
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-mono bg-background border border-border rounded">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border lg:hidden overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                      isActive
                        ? "bg-accent/80 text-foreground"
                        : "text-foreground hover:bg-accent/50"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                href={topmateLink.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 text-base font-semibold rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25 transition-all hover:shadow-lg"
              >
                <Sparkles className="h-4 w-4" />
                {topmateLink.name}
              </Link>

              <div className="pt-4 border-t border-border">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground hover:bg-accent/50 rounded-xl transition-colors"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandMenu />
    </>
  );
}
