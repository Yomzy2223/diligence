import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SettingsContextSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-3 w-1/2 max-w-[172px] mb-4" />

      <div className="flex gap-6 border border-border py-4 px-6">
        <div className="flex flex-col justify-around gap-4 flex-1 h-28 max-w-[220px]">
          <Skeleton className="h-3 w-1/2 max-w-[131px]" />
          <Skeleton className="h-3 w-full max-w-[92px]" />
          <Skeleton className="h-3 w-full max-w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default SettingsContextSkeleton;
