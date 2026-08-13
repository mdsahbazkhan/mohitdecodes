"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: string;
    href: string;
  };
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <Link href={feature.href} className="block h-full">
        <div
          className={cn(
            "relative h-full p-6 rounded-2xl border border-border bg-card",
            "transition-all duration-300",
            "hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5",
            "overflow-hidden"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {feature.description}
            </p>
            <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
