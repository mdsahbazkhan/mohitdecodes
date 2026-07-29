import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Features from "@/components/sections/features";
import CoursesPreview from "@/components/sections/courses-preview";
import RoadmapsPreview from "@/components/sections/roadmaps-preview";
import ResourcesPreview from "@/components/sections/resources-preview";
import Testimonials from "@/components/sections/testimonials";
import Newsletter from "@/components/sections/newsletter";
import FAQ from "@/components/sections/faq";
import TrustedBy from "@/components/sections/trusted-by";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Stats />
      <Features />
      <CoursesPreview />
      <RoadmapsPreview />
      <ResourcesPreview />
      <Testimonials />
      <Newsletter />
      <FAQ />
    </div>
  );
}
