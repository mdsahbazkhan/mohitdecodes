import { CourseCardSkeleton } from "@/components/skeletons/course-card-skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="h-10 w-48 bg-muted rounded-lg animate-pulse mb-6" />
            <div className="h-6 w-full max-w-2xl bg-muted rounded-lg animate-pulse mb-2" />
            <div className="h-6 w-3/4 max-w-2xl bg-muted rounded-lg animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="h-12 w-full max-w-xl bg-muted rounded-xl animate-pulse" />
            <div className="flex gap-3">
              <div className="h-12 w-32 bg-muted rounded-xl animate-pulse" />
              <div className="h-12 w-32 bg-muted rounded-xl animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
