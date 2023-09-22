import React from "react";
import { Skeleton } from "../ui/skeleton";
import { skeletonHeaders, skeletonRows } from "./constant";

const TableSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col">
        {/* Table header */}
        <Skeleton className="grid grid-cols-6 grid-flow-row gap-4 items-center w-full h-16 px-10 ">
          {skeletonHeaders.map((el, i) => (
            <Skeleton key={i} className={`${el} w-full h-4`} invertColor />
          ))}
        </Skeleton>

        {/* Table body */}
        <div className="flex flex-col gap-4 w-full border border-border border-t-0 rounded-lg pt-6 pb-4">
          {[1, 2, 3, 4, 5]?.map((row, i) => (
            <div key={i} className="grid grid-cols-6 grid-flow-row gap-4 items-center px-10">
              {skeletonRows.map((el, i) => (
                <Skeleton key={i} className={`${el} w-full h-4`} />
              ))}
              <Skeleton className="max-w-[111px] w-full h-8" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex gap-4 self-center">
        {[1, 2, 3, 4].map((el, i) => (
          <Skeleton key={i} className="w-8 h-6" />
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
