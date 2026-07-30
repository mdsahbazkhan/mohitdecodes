"use client";

import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  GraduationCap,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2020",
    title: "Started YouTube Channel",
    description:
      "Started MohitDecodes with a passion for teaching web development to everyone for free.",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "100K Subscribers",
    description:
      "Hit 100K subscribers and expanded content to cover full-stack development courses.",
    icon: Users,
  },
  {
    year: "2022",
    title: "Platform Launch",
    description:
      "Launched mohitdecodes.com as a complete learning platform with resources and roadmaps.",
    icon: BookOpen,
  },
  {
    year: "2023",
    title: "500K Community",
    description:
      "Grew to 500K+ subscribers and became one of the most loved developer education channels.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Global Impact",
    description:
      "Helping millions of developers worldwide with free, quality education.",
    icon: Target,
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                MohitDecodes
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Empowering developers to master modern web technologies through
              practical, project-based learning. Free education for everyone,
              everywhere.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Mission & Vision
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground mb-6 leading-relaxed"
              >
                Our mission is to democratize technology education and make
                high-quality programming courses accessible to everyone,
                regardless of their background or financial situation.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                We envision a world where anyone with an internet connection can
                learn the skills needed to build a successful career in tech.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-xl">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <span className="font-medium">Innovation</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-xl">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">Community</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-xl">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="font-medium">Quality</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "500K+", sublabel: "Subscribers" },
                { label: "50M+", sublabel: "Total Views" },
                { label: "25+", sublabel: "Free Courses" },
                { label: "100+", sublabel: "Projects" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl border border-border bg-card text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              The Journey
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground"
            >
              From a small YouTube channel to a global developer community.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors">
                      <div className="text-sm font-medium text-primary mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Skills & Expertise
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground"
            >
              Technologies I teach and work with daily.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Git",
              "Docker",
              "AWS",
              "GraphQL",
            ].map((skill, i) => (
              <motion.div
                key={skill}
                variants={fadeInUp}
                className="px-4 py-3 rounded-xl border border-border bg-card text-center text-sm font-medium hover:border-primary/20 hover:text-primary transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
