"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { services } from "@/data/topmate";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TopmatePreview() {
  const featured = services.slice(0, 4);

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
              Topmate{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl">
              Personalized mentorship and career guidance to accelerate your
              developer journey. One-on-one sessions with industry experts.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/topmate"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4 md:mt-0 group"
            >
              View all
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <div className="group block h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.poster}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {service.popular && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md mb-2">
                    {service.category}
                  </span>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1 mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {service.duration}
                    </span>
                    <span className="text-sm font-bold text-primary">
                      ${service.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
