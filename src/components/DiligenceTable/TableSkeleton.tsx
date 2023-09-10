import React from "react";
import { Skeleton } from "../ui/skeleton";

const TableSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 w-full">
          <Skeleton className="w-full h-16" />
        </div>
        <div className="flex flex-col gap-4 w-full">
          {[1, 2, 3, 4, 5]?.map((row, i) => (
            <div key={i} className="flex justify-between">
              <Skeleton className="w-10 h-8" />
              <Skeleton className="w-28 h-8" />
              <Skeleton className="w-32 h-8" />
              <Skeleton className="w-28 h-8" />
              <Skeleton className="w-20 h-8" />
              <Skeleton className="w-32 h-8" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 self-center">
        <Skeleton className="w-10 h-8" />
        <Skeleton className="w-10 h-8" />
        <Skeleton className="w-10 h-8" />
        <Skeleton className="w-10 h-8" />
      </div>
    </div>
  );
};

export default TableSkeleton;
