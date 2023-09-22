import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SidebarSkeleton = () => {
  return (
    <div className="flex flex-col px-6 border-r border-border h-full py-4">
      <Skeleton className="w-6 h-6 mb-12" />
      <div className="flex flex-col justify-between flex-1">
        <div className="space-y-2">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-12 w-48" />
        </div>
        <Skeleton className="w-24 h-6" />
      </div>
    </div>
  );
};

export default SidebarSkeleton;
