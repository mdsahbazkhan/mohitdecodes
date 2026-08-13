"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email && email.includes("@")) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-background section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-primary mb-6"
          >
            <Mail className="w-4 h-4" />
            <span>Newsletter</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Stay Updated with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Latest Content
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
            Get weekly updates on new tutorials, courses, and resources delivered straight to your inbox.
          </motion.p>

          <motion.div variants={fadeInUp}>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 text-green-500"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">Thanks for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-base outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 mt-2">Please enter a valid email address.</p>
            )}
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe anytime. Read our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
