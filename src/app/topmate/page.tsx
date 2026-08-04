"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ArrowRight,
  Check,
  Clock,
  Play,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Calendar,
  Video,
  Zap,
  Trophy,
  BookOpen,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";


type TabKey = "all" | "call" | "dm" | "digital" | "package";

interface Offering {
  id: string;
  tab: Exclude<TabKey, "all">;
  tabLabel: string;
  title: string;
  description: string;
  poster: string;
  category?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  duration?: string;
  badge?: string;
  url: string;
}


function toOffering(
  raw: any,
  tab: Offering["tab"],
  tabLabel: string,
  badgeFallback?: string,
): Offering {
  return {
    id: raw.id,
    tab,
    tabLabel,
    title: raw.title,
    description: raw.description,
    poster: raw.poster,
    category: raw.category,
    price: raw.price,
    originalPrice: raw.originalPrice,
    rating: raw.rating,
    duration: raw.duration,
    badge: raw.badge ?? (raw.popular ? "Popular" : badgeFallback),
    url: raw.url ?? raw.link ?? "#",
  };
}

function useOfferings() {
  return useMemo(() => {
    const callItems = (services as any[])
      .filter((s) => s.type !== "dm")
      .map((s) => toOffering(s, "call", "1:1 Call"));

    const dmItems = (services as any[])
      .filter((s) => s.type === "dm")
      .map((s) => toOffering(s, "dm", "Priority DM"));

    const digitalItems = (products as any[]).map((p) =>
      toOffering(p, "digital", "Digital Products"),
    );

    const packageItems = (packages as any[]).map((pkg) =>
      toOffering(pkg, "package", "Packages", "Best Deal"),
    );

    return [...callItems, ...dmItems, ...digitalItems, ...packageItems];
  }, []);
}

const TABS: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: <Zap className="w-4 h-4" /> },
  { key: "call", label: "1:1 Call", icon: <Video className="w-4 h-4" /> },
  // {
  //   key: "dm",
  //   label: "Priority DM",
  //   icon: <MessageCircle className="w-4 h-4" />,
  // },
  {
    key: "digital",
    label: "Digital Products",
    icon: <BookOpen className="w-4 h-4" />,
  },
  { key: "package", label: "Packages", icon: <Trophy className="w-4 h-4" /> },
];



function ProfileHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="relative mb-6">
            <div className="absolute inset-0 -m-1.5 rounded-full bg-gradient-to-br from-primary to-primary/40 opacity-60 blur-md" />
            <img
              src="/mohitdecodeprofileimage.jpeg"
              alt={profile.name}
              className="relative h-28 w-28 rounded-full border-4 border-background object-cover bg-card shadow-xl"
            />
            <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-green-500">
              <Check className="h-4 w-4 text-white" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mb-4 text-lg text-muted-foreground"
          >
            {profile.username}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mb-8 max-w-2xl text-xl font-medium text-foreground"
          >
            {profile.headline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {[
              {
                label: "Bookings",
                value: `${profile.stats.bookings}+`,
                icon: <Calendar className="h-4 w-4 text-primary" />,
              },
              {
                label: "Rating",
                value: `${profile.stats.rating}`,
                icon: (
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ),
              },
              {
                label: "Followers",
                value: `${(profile.stats.followers / 1000).toFixed(1)}K`,
                icon: <Users className="h-4 w-4 text-primary" />,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-2xl border border-border bg-card/80 px-4 py-2.5 backdrop-blur-sm"
              >
                {stat.icon}
                <span className="text-lg font-semibold">{stat.value}</span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {profile.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <a
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              <Play className="h-5 w-5 fill-current" />
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
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        {title}
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {subtitle}
        </span>
      </h2>
      {href && (
        <a
          href={href}
          className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
        >
          View all
          <ArrowRight className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}



function OfferingCard({ item }: { item: Offering }) {
  const hasDiscount =
    item.originalPrice !== undefined &&
    item.price !== undefined &&
    item.originalPrice > item.price;

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.98 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.poster}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap items-center gap-2">
          {item.badge && (
            <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-sm">
              {item.badge}
            </span>
          )}
          <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {item.tabLabel}
          </span>
        </div>

        {item.duration && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            <Clock className="h-3 w-3" />
            {item.duration}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {item.category && (
          <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/80">
            {item.category}
          </span>
        )}

        <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </h3>

        <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex flex-col gap-1">
            {item.price !== undefined && (
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-foreground">
                  ₹{item.price.toLocaleString()}
                </span>
                {hasDiscount && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{item.originalPrice!.toLocaleString()}
                  </span>
                )}
              </div>
            )}
            {item.rating !== undefined && (
              <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                {typeof item.rating === "number"
                  ? item.rating.toFixed(1)
                  : item.rating}
              </div>
            )}
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.a>
  );
}



function TabPills({
  active,
  onChange,
  counts,
}: {
  active: TabKey;
  onChange: (t: TabKey) => void;
  counts: Record<TabKey, number>;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={cn(
              "relative overflow-hidden rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200",
              isActive
                ? "text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="active-tab-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon}
              {tab.label}
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                  isActive ? "bg-white/20" : "bg-muted",
                )}
              >
                {counts[tab.key]}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}



function OfferingsSection() {
  const offerings = useOfferings();
  const [active, setActive] = useState<TabKey>("all");

  const counts = useMemo(() => {
    const c: Record<TabKey, number> = {
      all: offerings.length,
      call: 0,
      dm: 0,
      digital: 0,
      package: 0,
    };
    offerings.forEach((o) => {
      c[o.tab]++;
    });
    return c;
  }, [offerings]);

  const filtered = useMemo(
    () =>
      active === "all" ? offerings : offerings.filter((o) => o.tab === active),
    [offerings, active],
  );

  return (
    <section className="bg-muted/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Explore My " subtitle="Offerings" />

        <div className="mb-10">
          <TabPills active={active} onChange={setActive} counts={counts} />
        </div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((item) => (
                <OfferingCard key={`${item.tab}-${item.id}`} item={item} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-muted-foreground"
            >
              Nothing here yet — check back soon.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}



function WebinarCard({ webinar }: { webinar: any }) {
  return (
    <motion.a
      variants={fadeInUp}
      href={webinar.url ?? webinar.link ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.98 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={webinar.poster}
          alt={webinar.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="animate-pulse rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            LIVE
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {webinar.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-sm text-white">
          <Calendar className="h-4 w-4" />
          {webinar.date}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold transition-colors group-hover:text-primary">
          {webinar.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {webinar.description}
        </p>

        <div className="mb-4 space-y-2">
          {webinar.weeklyBreakdown.map((item: string, i: number) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Check className="h-3 w-3 shrink-0 text-primary" />
              {item}
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {webinar.perks.map((perk: string, i: number) => (
            <span
              key={i}
              className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
            >
              {perk}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {webinar.duration}
          </span>
          <span className="text-xl font-bold text-foreground">
            ₹{webinar.price.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function WebinarsSection() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Live " subtitle="Webinars" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {webinars.map((webinar: any) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </motion.div>
      </div>
    </section>
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

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 200;

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
    >
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {expanded
          ? review.text
          : `${review.text.slice(0, 200)}${isLong ? "..." : ""}`}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-primary hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{review.name}</span>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1" title="Helpful">
            <ThumbsUp className="h-3 w-3" />
            {review.helpful}
          </span>
          <span className="flex items-center gap-1" title="Insightful">
            <Lightbulb className="h-3 w-3" />
            {review.insightful}
          </span>
          <span className="flex items-center gap-1" title="Friendly">
            <MessageCircle className="h-3 w-3" />
            {review.friendly}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="What People " subtitle="Say" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}



function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl"
        >
          Ready to accelerate your career?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mb-8 text-lg text-primary-foreground/80"
        >
          Book a 1:1 session and get personalized guidance from an industry
          expert.
        </motion.p>
        <motion.a
          variants={fadeInUp}
          href="https://topmate.io/mohitdecodes/2101015?utm_source=public_profile&utm_campaign=mohitdecodes"
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-primary transition-all hover:scale-105 hover:shadow-lg"
        >
          Book a Session
          <ArrowRight className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}



function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-3"
        >
          {faqs.map((faq) => (
            <motion.div key={faq.id} variants={fadeInUp}>
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between rounded-2xl border border-border bg-card p-5 text-left transition-all hover:border-primary/20"
              >
                <span className="pr-4 font-medium">{faq.question}</span>
                {openId === faq.id ? (
                  <ChevronUp className="h-5 w-5 shrink-0 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="p-5 pt-3 leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
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
      <OfferingsSection />
      <WebinarsSection />
      <ReviewsSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}
