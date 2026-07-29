"use client";

import Link from "next/link";
import {
  Youtube,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  Learning: [
    { name: "Courses", href: "/courses" },
    { name: "Roadmaps", href: "/roadmaps" },
    { name: "Resources", href: "/resources" },
    { name: "YouTube", href: "/youtube" },
  ],
  Community: [
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Cheat Sheets", href: "/resources#cheatsheets" },
    { name: "Interview Q&A", href: "/resources#interview" },
    { name: "Notes", href: "/resources#notes" },
    { name: "PDFs", href: "/resources#pdfs" },
  ],
};

const socialLinks = [
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@mohitdecodes" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/mohitdecodes" },
  { name: "GitHub", icon: Github, href: "https://github.com/mohitdecodes" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/mohitdecodes" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/mohitdecodes" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                M
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                MohitDecodes
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Empowering developers to master modern web technologies through
              practical, project-based learning.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-accent/50 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-3">
                 {links.map((link) => (
                   <li key={link.name}>
                     <Link
                       href={link.href}
                       className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                     >
                       {link.name}
                       <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Link>
                   </li>
                 ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {currentYear} MohitDecodes. Built with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for
            developers.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
