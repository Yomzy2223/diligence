"use client";

import React, { ReactNode } from "react";
import TableSkeleton from "../DiligenceTable/TableSkeleton";
import { EmptyList } from "../features/emptyList";

const DoCheck = ({
  isLoading,
  isEmpty,
  emptySmall = true,
  children,
  className,
}: {
  isLoading: boolean;
  isEmpty: boolean;
  emptySmall?: boolean;
  children: ReactNode;
  className?: string;
}) => {
  //
  if (isLoading) return <TableSkeleton />;

  //
  if (isEmpty)
    return (
      <div className="flex justify-center items-center ">
        <EmptyList small={emptySmall ? true : false} />
      </div>
    );

  //
  return <div className={className}>{children}</div>;
};

export default DoCheck;
