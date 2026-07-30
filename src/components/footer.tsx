"use client";

import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import Icon from "lucide-react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

const footerLinks = {
  Learning: [
    { name: "Courses", href: "/courses" },
    { name: "Roadmaps", href: "/roadmaps" },
    { name: "Resources", href: "/resources" },
    { name: "YouTube", href: "/youtube" },
    { name: "Topmate", href: "/topmate" },
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
  {
    icon: FaYoutube,
    href: "https://youtube.com/@mohitdecodes",
    label: "YouTube",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/mohitdecodes",
    label: "Twitter",
  },
  {
    icon: FaGithub,
    href: "https://github.com/mohitdjcet",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/mohitdecodes",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/mohitdecodes",
    label: "Instagram",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/mohitdecode",
    label: "Facebook",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/mohitdecode_logo.jpeg"
                alt="MohitDecodes logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-display font-bold text-xl tracking-tight">
                MohitDecodes
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Empowering developers to master modern web technologies through
              practical, project-based learning.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-accent/50 transition-all"
                    aria-label={social.label}
                  >
                    <SocialIcon className="w-5 h-5" />
                  </a>
                );
              })}
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
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
