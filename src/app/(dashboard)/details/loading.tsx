import TableSkeleton from "@/components/DiligenceTable/TableSkeleton";
import EnterpriseSummarySkeleton from "@/components/features/EnterpriseInfo/EnterpriseSummarySkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center gap-1 py-4 pl-10 pr-6 border-b border-border">
        <Skeleton className="h-4 w-full max-w-[287px]" />
        <Skeleton className="h-12 w-full max-w-[182px]" />
      </div>
      <div className="px-6 space-y-6">
        <EnterpriseSummarySkeleton />
        <TableSkeleton />
      </div>
    </div>
  );
};

export default Loading;
