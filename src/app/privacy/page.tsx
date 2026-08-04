"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Privacy{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-8"
            >
              Last updated: August 2025
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when
                  you fill out a contact form, book a mentorship session, or
                  subscribe to our newsletter. This may include your name, email
                  address, and any other information you choose to provide.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and
                  improve our services, communicate with you, and personalize your
                  experience. We do not sell or share your personal information
                  with third parties for marketing purposes.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable measures to protect your personal information
                  from unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet is 100%
                  secure.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site
                  traffic, and personalize content. You can choose to disable
                  cookies through your browser settings, though some features of
                  the site may not function properly.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us through our{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
