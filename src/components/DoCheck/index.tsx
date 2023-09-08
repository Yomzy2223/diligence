"use client";

import React, { ReactNode } from "react";
import { Puff } from "react-loading-icons";
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
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-24 ">
        <Puff stroke="hsl(var(--primary))" />
      </div>
    );

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