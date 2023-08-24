"use client";

import DoCheck from "@/components/DoCheck";
import React from "react";
import { Puff } from "react-loading-icons";
import { DiligenceTable } from "../../DiligenceTable";
import { EmptyList } from "../../emptyList";
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
