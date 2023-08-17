"use client";

import React from "react";
import { Puff } from "react-loading-icons";
import { DiligenceTable } from "../../DiligenceTable";
import { EmptyList } from "../../emptyList";
import { useActions } from "./useActions";

const CorporateRequestInfo = ({ formInfo }: { formInfo: any }) => {
  const { headers, dataBody, requests, isLoading } = useActions();

  //
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-24 ">
        <Puff stroke="blue" />
      </div>
    );

  //
  if (requests?.length === 0)
    return (
      <div className="text-center">
        <EmptyList />
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
