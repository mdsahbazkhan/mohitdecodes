"use client";

import Image from "next/image";
import { PlayCircle, CheckCircle2, ArrowLeft, Share2, Bookmark, Star, Users, Clock } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { courses } from "@/data/courses";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Metadata } from "next";

export default function CoursePage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Courses
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <motion.div variants={fadeInUp} className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                      {course.category}
                    </span>
                    {course.price === 0 && (
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 text-xs font-semibold rounded-full">
                        FREE
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {course.title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                    <span className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {course.instructor[0]}
                        </span>
                      </div>
                      {course.instructor}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {course.rating} rating
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {(course.students / 1000).toFixed(0)}K students
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105">
                      <PlayCircle className="w-5 h-5" />
                      Start Learning
                    </button>
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className="inline-flex items-center gap-2 px-6 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-accent/50 transition-colors"
                    >
                      <Bookmark
                        className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
                      />
                      {isBookmarked ? "Saved" : "Save"}
                    </button>
                    <button className="inline-flex items-center gap-2 px-6 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-accent/50 transition-colors">
                      <Share2 className="w-5 h-5" />
                      Share
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">
                    What You&apos;ll Learn
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Master modern web development fundamentals",
                      "Build real-world projects from scratch",
                      "Understand best practices and patterns",
                      "Deploy applications to production",
                      "Work with modern tools and frameworks",
                      "Debug and optimize your code",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h2 className="text-2xl font-bold mb-6">Course Content</h2>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Introduction & Setup",
                        lessons: 5,
                        duration: "45m",
                      },
                      {
                        title: "Core Concepts",
                        lessons: 12,
                        duration: "2h 30m",
                      },
                      {
                        title: "Building Projects",
                        lessons: 18,
                        duration: "4h 15m",
                      },
                      {
                        title: "Advanced Topics",
                        lessons: 8,
                        duration: "1h 45m",
                      },
                      {
                        title: "Deployment & Best Practices",
                        lessons: 5,
                        duration: "1h",
                      },
                    ].map((section) => (
                      <div
                        key={section.title}
                        className="p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold mb-1">
                              {section.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {section.lessons} lessons · {section.duration}
                            </p>
                          </div>
                          <PlayCircle className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <motion.div
                  variants={fadeInUp}
                  className="sticky top-24 space-y-6"
                >
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                        <PlayCircle className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold">
                          {course.price === 0 ? "Free" : `$${course.price}`}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{course.rating}</span>
                        </div>
                      </div>
                      <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors mb-3">
                        Enroll Now
                      </button>
                      <p className="text-xs text-center text-muted-foreground">
                        30-day money-back guarantee
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-semibold mb-4">Course Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lessons</span>
                        <span className="font-medium">{course.lessons}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Level</span>
                        <span className="font-medium">{course.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Students</span>
                        <span className="font-medium">
                          {(course.students / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
