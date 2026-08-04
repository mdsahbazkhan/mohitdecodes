"use client";

import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
 
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const expertiseAreas = [
  "Full-Stack Web Development (MERN & MEAN Stack)",
  "React.js, Next.js, JavaScript & TypeScript",
  "Node.js, Express.js & REST API Development",
  "Python, FastAPI & Django Development",
  "AI/ML Fundamentals & Real-World Applications",
  "Generative AI, LLMs & AI Integrations",
  "Agentic AI & AI Agent Development",
  "Data Analytics (Python, SQL, Pandas, NumPy)",
  "Power BI Dashboard Development & Data Visualization",
  "Frontend Architecture & System Design",
  "Redux, State Management & Performance Optimization",
  "Micro Frontends & Module Federation",
  "PWA & Modern Web Technologies",
  "Technical Interview Preparation",
  "Resume & LinkedIn Profile Reviews",
  "Mock Interviews & Career Guidance",
  "Project, Portfolio & Code Reviews",
];

const whyWorkWithMe = [
  "13+ years of hands-on software engineering and leadership experience",
  "Expertise across Full-Stack Development, AI, Data Analytics, and modern web technologies",
  "Experience building scalable, enterprise-grade applications used by millions of users",
  "1000+ successful mentorship and career guidance sessions",
  "Practical, industry-focused learning with real-world examples",
  "Personalized guidance tailored to your career goals",
  "Strong focus on coding best practices, system design, and performance optimization",
  "Actionable feedback on projects, resumes, portfolios, and interview prep",
];

const stats = [
  { label: "Years Experience", value: "13+" },
  { label: "Mentorship Sessions", value: "1000+" },
  { label: "Technologies", value: "20+" },
  { label: "Developers Helped", value: "5000+" },
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
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Mohit Kumar
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed mb-6"
            >
              Hi, I&apos;m Mohit Kumar, an Engineering Manager, Corporate Trainer,
              and Career Mentor with 13+ years of experience in software
              development, engineering leadership, and technical mentoring.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              I specialize in designing and building scalable, high-performance
              applications using React.js, JavaScript, TypeScript, Next.js, Redux,
              MERN Stack, MEAN Stack, Python, FastAPI, Django, AI/ML, Generative
              AI, Agentic AI, Data Analytics, Power BI, Micro Frontends, Module
              Federation, Progressive Web Apps (PWA), and modern cloud
              technologies.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/topmate"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Book a Session
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-accent/50 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Explore Courses
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-border bg-card text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Overview */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            >
              Career Overview
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              Throughout my career, I&apos;ve led engineering teams, architected
              enterprise-scale applications, and delivered production-ready
              software serving millions of users. Beyond software development, I am
              passionate about mentoring aspiring developers and helping
              professionals advance their careers through practical guidance and
              industry-focused learning.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              With 1000+ mentorship and career guidance sessions, I&apos;ve helped
              students, freshers, and experienced professionals strengthen their
              technical skills, prepare for interviews, transition into new roles,
              and achieve their career goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Areas of Expertise */}
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
              Areas of Expertise
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive guidance across full-stack development, AI/ML, data
              analytics, and career mentorship.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {expertiseAreas.map((area) => (
              <motion.div
                key={area}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {area}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
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
              Why Work With Me
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A mentor who brings real-world experience, proven results, and a
              genuine passion for helping others succeed.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyWorkWithMe.map((reason) => (
              <motion.div
                key={reason}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Let&apos;s Build Something Great Together
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            Whether you&apos;re beginning your software engineering journey,
            preparing for technical interviews, exploring MERN Stack, MEAN Stack,
            AI/ML, Generative AI, Agentic AI, Data Analytics, Power BI, or
            planning your next career move, my goal is to provide practical
            knowledge, clear direction, and actionable guidance that helps you
            grow with confidence.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/topmate"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Book a Mentorship Session
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground border border-border rounded-xl font-medium hover:bg-accent/50 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Browse Courses
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
