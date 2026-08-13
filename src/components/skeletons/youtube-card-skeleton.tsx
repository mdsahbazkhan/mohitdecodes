import { Skeleton } from "@/components/skeletons/skeleton";

export function YouTubeCardSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-border bg-card overflow-hidden">
      <div className="relative aspect-video">
        <Skeleton className="w-full h-full rounded-none" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Skeleton className="h-5 w-16 rounded-md" />
          <div className="flex items-center gap-1">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-12 rounded" />
          </div>
        </div>
        <Skeleton className="h-5 w-full rounded mb-2" />
        <Skeleton className="h-5 w-3/4 rounded mb-4" />
        <Skeleton className="h-4 w-full rounded mb-2" />
        <Skeleton className="h-4 w-2/3 rounded" />
      </div>
    </div>
  );
}
