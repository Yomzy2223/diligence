"use client";

import DoCheck from "@/components/DoCheck";
import React from "react";
import { DiligenceTable } from "../../../DiligenceTable";
import { useActions } from "./useActions";

const CorporateRequestInfo = ({ status }: { status?: string }) => {
  const { headers, dataBody, requests, isLoading } = useActions({ status });

  return (
    <DoCheck isLoading={isLoading} isEmpty={requests?.length === 0}>
      <DiligenceTable header={headers} body={dataBody} />
    </DoCheck>
  );
};

export default CorporateRequestInfo;
