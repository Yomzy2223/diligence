"use client";

import TableSkeleton from "@/components/DiligenceTable/TableSkeleton";
import CorporateRequestSkeleton from "@/components/features/corporateRequest/CorporateRequestSkeleton";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { getUserInfo } from "@/lib/globalFunctions";
import React from "react";

const Loading = () => {
  const userRole = getUserInfo()?.data?.role?.toLowerCase();
  const show = userRole === "admin" || userRole === "manager";

  return (
    <div>
      <div className="flex items-center gap-4 pl-10 pr-6 py-4 w-full">
        <Skeleton className="h-16 w-16" />
        <Skeleton className="h-4 w-16" />
        <div className="flex flex-1 justify-end">{show && <Skeleton className="h-8 w-24" />}</div>
      </div>
      <Separator />
      <div className="pl-10 pr-6 pb-8">
        <CorporateRequestSkeleton />
        <div>
          <div className="flex justify-between gap-10 mb-4">
            <Skeleton className="flex-1 h-14 max-w-xl" />
            <Skeleton className="flex flex-1 items-center justify-end px-4 h-14 max-w-sm">
              <Skeleton className="w-10 h-10 rounded-full" invertColor />
            </Skeleton>
          </div>
          <TableSkeleton />;
        </div>
      </div>
    </div>
  );
};

export default Loading;

// import SidebarSkeleton from "@/components/features/sidebar/SidebarSkeleton";
// import MainHeaderSkeleton from "@/components/header/mainHeader/MainHeaderSkeleton";
// import React from "react";

// const Loading = () => {
//   return (
//     <div>
//       <MainHeaderSkeleton />
//       <div className="flex flex-1 ">
//         <div>
//           <SidebarSkeleton />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loading;
