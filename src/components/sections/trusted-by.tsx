"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
  "Spotify",
  "Airbnb",
  "Uber",
  "Stripe",
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.p variants={fadeInUp} className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by developers working at
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {companies.map((company) => (
            <motion.div
              key={company}
              variants={fadeInUp}
              className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300"
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
