"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  profile,
  services,
  packages,
  webinars,
  products,
  reviews,
  highlights,
  faqs,
} from "@/data/topmate";
import {
  Star,
  Search,
  Filter,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Play,
  Share2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Calendar,
  Video,
  Zap,
  Trophy,
  TrendingUp,
  Target,
  BookOpen,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";



function ProfileHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="relative mb-6">
            <img
              src="/mohitdecodeprofileimage.jpeg"
              alt={profile.name}
              className="w-28 h-28 rounded-full border-4 border-border object-cover bg-card"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-2 border-background rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-4"
          >
            {profile.username}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground font-medium mb-6"
          >
            {profile.headline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8"
          >
            {[
              {
                label: "Bookings",
                value: `${profile.stats.bookings}+`,
                icon: <Calendar className="w-4 h-4" />,
              },
              {
                label: "Rating",
                value: `${profile.stats.rating} ★`,
                icon: (
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ),
              },
              {
                label: "Followers",
                value: `${(profile.stats.followers / 1000).toFixed(1)}K`,
                icon: <Users className="w-4 h-4" />,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl"
              >
                {stat.icon}
                <span className="font-semibold text-lg">{stat.value}</span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            {profile.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <a
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
            >
              <Play className="w-5 h-5 fill-white" />
              Subscribe on YouTube
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


function SectionHeader({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {title}{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {subtitle}
          </span>
        </h2>
      </div>
      {href && (
        <a
          href={href}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4 md:mt-0"
        >
          View all
          <ArrowRight className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="group block h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={service.poster}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {service.popular && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Popular
            </span>
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md">
            {service.category}
          </span>
          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {service.duration}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {service.description}
        </p>
        {service.bookings && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
            <TrendingUp className="w-3 h-3" />
            {service.bookings} bookings
          </div>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {service.rating}.0
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-foreground">
              ₹{service.price}
            </span>
          </div>
        </div>
        <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-[1.02]">
          Book Session
        </button>
      </div>
    </div>
  );
}

function ServicesSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = [
    "All",
    "Career",
    "Interview",
    "Frontend",
    "Full Stack",
    "Resume",
  ];

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesSearch =
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || s.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="My " subtitle="Services" href="/topmate" />

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-base outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No services found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: (typeof packages)[0] }) {
  const discountedPrice = Math.round(pkg.price * 0.8);

  return (
    <div className="group block h-full rounded-2xl border-2 border-primary bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative">
      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-xl">
        SAVE 20%
      </div>
      <div className="p-8">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
          {pkg.category}
        </span>
        <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {pkg.description}
        </p>

        <ul className="space-y-3 mb-6">
          {pkg.agenda.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-4xl font-bold text-foreground">
            ₹{pkg.price}
          </span>
          <span className="text-lg text-muted-foreground line-through">
            ₹{pkg.originalPrice}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Clock className="w-4 h-4" />
          {pkg.duration}
        </div>

        <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/25">
          Book Package
        </button>
      </div>
    </div>
  );
}

function PackagesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Mentorship " subtitle="Packages" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-lg mx-auto"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.id} variants={fadeInUp}>
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WebinarCard({ webinar }: { webinar: (typeof webinars)[0] }) {
  return (
    <div className="group block h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={webinar.poster}
          alt={webinar.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full animate-pulse">
            LIVE
          </span>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {webinar.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
          <Calendar className="w-4 h-4" />
          {webinar.date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {webinar.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {webinar.description}
        </p>

        <div className="space-y-2 mb-4">
          <h4 className="text-sm font-semibold">Weekly Breakdown</h4>
          {webinar.weeklyBreakdown.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Check className="w-3 h-3 text-primary shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {webinar.perks.map((perk, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"
            >
              {perk}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {webinar.duration}
            </span>
          </div>
          <span className="text-xl font-bold text-foreground">
            ₹{webinar.price.toLocaleString()}
          </span>
        </div>

        <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-[1.02]">
          Reserve Seat
        </button>
      </div>
    </div>
  );
}

function WebinarsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Live " subtitle="Webinars" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {webinars.map((webinar) => (
            <motion.div key={webinar.id} variants={fadeInUp}>
              <WebinarCard webinar={webinar} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <div className="group block h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.poster}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {product.format}
          </span>
        </div>
        {product.questions && (
          <div className="absolute bottom-3 left-3">
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md">
              {product.questions} Q&A
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {product.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"
            >
              {topic}
            </span>
          ))}
          {product.topics.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
              +{product.topics.length - 3} more
            </span>
          )}
        </div>
        <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-card text-foreground rounded-xl font-semibold text-sm border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
          {product.format === "PDF" ? "Download" : "Enroll Now"}
        </button>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Digital " subtitle="Products" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 200;

  return (
    <motion.div
      variants={fadeInUp}
      className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {expanded
          ? review.text
          : `${review.text.slice(0, 200)}${isLong ? "..." : ""}`}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary hover:underline ml-1"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{review.name}</span>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1" title="Helpful">
            <ThumbsUp className="w-3 h-3" />
            {review.helpful}
          </span>
          <span className="flex items-center gap-1" title="Insightful">
            <Lightbulb className="w-3 h-3" />
            {review.insightful}
          </span>
          <span className="flex items-center gap-1" title="Friendly">
            <MessageCircle className="w-3 h-3" />
            {review.friendly}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ThumbsUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function Lightbulb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function ReviewsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="What People " subtitle="Say" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={fadeInUp}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4"
        >
          Ready to accelerate your career?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-primary-foreground/80 mb-8"
        >
          Book a 1:1 session and get personalized guidance from an industry
          expert.
        </motion.p>
        <motion.a
          variants={fadeInUp}
          href="/topmate"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
        >
          Book a Session
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div key={faq.id} variants={fadeInUp}>
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 rounded-xl border border-border bg-card hover:border-primary/20 transition-all text-left"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                {openId === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              {openId === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="p-5 pt-0 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Topmate() {
  return (
    <div className="min-h-screen">
      
      <ProfileHero />
     
      <ServicesSection />
      <PackagesSection />
      <WebinarsSection />
      <ProductsSection />
      <ReviewsSection />
      <CTASection />
      <FAQSection />

    
    </div>
  );
}
