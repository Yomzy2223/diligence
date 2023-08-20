"use client";

import React from "react";
import { Puff } from "react-loading-icons";
import { DiligenceTable } from "../../DiligenceTable";
import { EmptyList } from "../../emptyList";
import { useActions } from "./useActions";

const CorporateRequestInfo = ({ status }: { status?: string }) => {
  const { headers, dataBody, requests, isLoading } = useActions({ status });

  //
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-24 ">
        <Puff stroke="hsl(var(--primary))" />
      </div>
    );

  //
  if (requests?.length === 0)
    return (
      <div className="flex justify-center items-center ">
        <EmptyList small />
      </div>
    );

  //
  return (
    <div>
      <div>
        <DiligenceTable header={headers} body={dataBody} />
      </div>
    </div>
  );
};

export default CorporateRequestInfo;
