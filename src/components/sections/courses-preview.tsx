"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { courses } from "@/data/courses";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

export default function CoursesPreview() {
  const featured = courses.filter((c) => c.featured).slice(0, 3);

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
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Courses
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl">
              Comprehensive courses designed to take you from beginner to professional developer.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4 md:mt-0 group"
            >
              View all courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((course) => (
            <motion.div key={course.id} variants={fadeInUp}>
              <Link
                href={`/courses/${course.id}`}
                className="group block h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                      {course.level}
                    </span>
                  </div>
                  {course.price === 0 && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-full">
                        FREE
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                      {course.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {(course.students / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {course.lessons} lessons
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
