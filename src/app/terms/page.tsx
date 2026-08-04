"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";

export default function Terms() {
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
              Terms of{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Service
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
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using this website, you agree to be bound by
                  these Terms of Service. If you do not agree to these terms,
                  please do not use our services.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">
                  Use of Our Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to use our services only for lawful purposes and in a
                  way that does not infringe the rights of, restrict, or inhibit
                  anyone else&apos;s use and enjoyment of the website. Prohibited
                  behavior includes harassing or causing distress to any other
                  user, transmitting obscene or offensive content, or disrupting
                  the normal flow of dialogue within the site.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content included on this website, such as text, graphics,
                  logos, images, and software, is the property of MohitDecodes or
                  its licensors and is protected by copyright and other
                  intellectual property laws.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">
                  Mentorship & Booking Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mentorship sessions booked through our Topmate integration are
                  subject to the terms of that platform. Cancellation and refund
                  policies are governed by the respective service provider.
                  We strive to provide quality mentorship but do not guarantee
                  specific outcomes from the sessions.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, MohitDecodes shall not
                  be liable for any indirect, incidental, special, consequential,
                  or punitive damages arising out of or related to your use of
                  our services.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please
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
