import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const StatusReportSkeleton = () => {
  return (
    <div className="">
      <Skeleton className="flex items-center justify-between h-12 w-full px-4">
        <div className="flex items-center gap-4 w-full">
          <Skeleton className="h-6 w-6" invertColor />
          <Skeleton className="h-4 w-2/3 max-w-[280px]" invertColor />
        </div>
        <Skeleton className="h-6 w-6 justify-self-end " invertColor />
      </Skeleton>
      <Skeleton className="h-7 w-2/3 max-w-[227px] mt-4" />
      <Skeleton className="h-4 w-10 mt-8" />
      <Skeleton className="flex items-center h-14 w-full mt-4 px-4">
        <Skeleton className="h-4 w-2/3 max-w-[250px]" invertColor />
      </Skeleton>
    </div>
  );
};

export default StatusReportSkeleton;
