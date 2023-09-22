import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const EnterpriseSummarySkeleton = () => {
  return (
    <div className="flex gap-6">
      <Skeleton className="h-48 w-48" />
      <div className="flex items-center gap-6 flex-1 h-48 ">
        {[1, 2, 3].map((el, i) => (
          <Skeleton
            key={i}
            className="flex gap-6 flex-col justify-between p-6 h-40 w-full max-w-[254px]"
          >
            <Skeleton className="h-6 w-1/3 max-w-[72px]" invertColor />
            <Skeleton className="h-2 w-2/3 max-w-[160px]" invertColor />
            <Skeleton className="h-6 w-3/5 max-w-[128px]" invertColor />
            <Skeleton />
          </Skeleton>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseSummarySkeleton;
