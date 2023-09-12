import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CorporateRequestSkeleton = () => {
  return (
    <Skeleton className="h-max py-6 w-full my-8">
      <div className="flex flex-col w-4/6 m-auto">
        <Skeleton className="w-1/2 h-6 mb-10" invertColor />
        <Skeleton className="w-full h-16 mb-1" invertColor />
        <Skeleton className="w-full h-16 mb-4" invertColor />
        <Skeleton className="self-end h-12 w-32" invertColor />
      </div>
    </Skeleton>
  );
};

export default CorporateRequestSkeleton;
