import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SettingsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-3 w-1/2 max-w-[172px] mb-4" />

      <div className="flex gap-6 border border-border p-6">
        <Skeleton className="h-36 w-36 mr-4" />

        <div className="flex flex-col justify-around gap-4 flex-1 h-36 max-w-[220px] py-2 pl-6 border-l border-border">
          {["max-w-[162px]", "max-w-[90px]", "sep", "max-w-[220px]", "max-w-[170px]"].map((el, i) =>
            el === "sep" ? (
              <Separator key={i} />
            ) : (
              <Skeleton key={i} className={`h-3 w-full ${el}`} />
            )
          )}
        </div>

        <div className="flex flex-col justify-around gap-4 flex-1 h-36 max-w-[220px] py-2">
          {["max-w-[168px]", "max-w-[90px]", "sep", "max-w-[160px]", "max-w-[190px]"].map((el, i) =>
            el === "sep" ? (
              <Separator key={i} />
            ) : (
              <Skeleton key={i} className={`h-3 w-full ${el}`} />
            )
          )}
        </div>

        <div className="flex flex-col gap-6 flex-1 h-36 max-w-[220px] py-2 border-l border-border pl-6">
          <Skeleton className="h-3 w-1/2 max-w-[98px]" />
          <Skeleton className="h-3 w-full max-w-[340px]" />
        </div>
      </div>
    </div>
  );
};

export default SettingsSkeleton;
