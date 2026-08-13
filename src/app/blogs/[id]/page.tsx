"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { blogs } from "@/data/blogs";
import {
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!blog) {
    notFound(); 
  }

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {blog.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {blog.readingTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                {blog.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {blog.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="rounded-full bg-muted"
                  />
                  <div>
                    <div className="font-semibold">{blog.author.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="p-2 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                    aria-label="Bookmark"
                  >
                    <Bookmark
                      className={`w-5 h-5 ${isBookmarked ? "fill-current text-primary" : ""}`}
                    />
                  </button>
                  <button
                    className="p-2 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                    aria-label="Share"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  This is a comprehensive guide covering all the important aspects
                  of the topic. In the full article, we dive deep into the
                  concepts, provide practical examples, and share insights from
                  real-world experience.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Whether you&apos;re a beginner or an experienced developer,
                  this article will provide valuable knowledge that you can apply
                  to your projects immediately.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Understanding the fundamentals is crucial for success</li>
                  <li>Practice with real projects to reinforce learning</li>
                  <li>Stay updated with the latest trends and best practices</li>
                  <li>Join communities to learn from other developers</li>
                </ul>
                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  I hope you found this article helpful. If you have any
                  questions or feedback, feel free to reach out. Don&apos;t
                  forget to subscribe to the newsletter for more content like
                  this!
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="p-6 rounded-2xl border border-border bg-card mb-12">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-between pt-8 border-t border-border">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Blogs
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
