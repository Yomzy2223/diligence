import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const MainHeaderSkeleton = () => {
  return (
    <div className="flex justify-between py-4 px-6">
      <Skeleton className="h-6 w-24" />
      <div className="flex gap-8">
        <Skeleton className="w-8 h-8" />
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default MainHeaderSkeleton;
