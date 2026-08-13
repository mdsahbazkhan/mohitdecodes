import { Skeleton } from "@/components/skeletons/skeleton";

export function CourseCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-border bg-card overflow-hidden">
      <div className="relative aspect-video">
        <Skeleton className="w-full h-full rounded-none" />
        <div className="absolute top-3 left-3">
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <div className="absolute top-3 right-3">
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Skeleton className="h-5 w-20 rounded-md" />
          <div className="flex items-center gap-1">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-10 rounded" />
          </div>
        </div>
        <Skeleton className="h-5 w-full rounded mb-2" />
        <Skeleton className="h-5 w-3/4 rounded mb-4" />
        <Skeleton className="h-4 w-full rounded mb-2" />
        <Skeleton className="h-4 w-2/3 rounded mb-4" />
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-10 rounded" />
            <Skeleton className="h-4 w-8 rounded" />
          </div>
          <Skeleton className="h-3 w-16 rounded" />
        </div>
      </div>
    </div>
  );
}
