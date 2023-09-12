"use client";

import DoCheck from "@/components/DoCheck";
import { useEnterprise } from "@/hooks/useEnterprise";
import { useRequests } from "@/hooks/useRequests";
import { getUserInfo } from "@/lib/globalFunctions";
import React, { useState } from "react";
import { DiligenceTable } from "../../../DiligenceTable";
import { useActions } from "./useActions";

const CorporateRequestInfo = ({ status }: { status?: string }) => {
  const [clickedRequest, setClickedRequest] = useState({ id: "" });

  const userInfo = getUserInfo()?.data;
  const role = userInfo?.role?.toLowerCase();

  // API calls
  const {
    deleteRequestMutation,
    useViewBranchRequests,
    verifyRequestMutation,
    useViewRequestDocumentQuery,
  } = useRequests();
  const { data, isLoading } = useViewBranchRequests(userInfo?.managerId);
  const requestDocument = useViewRequestDocumentQuery(clickedRequest?.id);
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterprise = useViewEnterpriseByIdQuery(userInfo?.enterpriseId);

  // Actions
  const { headers, dataBody, requests } = useActions({
    data,
    requestDocument,
    enterprise,
    deleteRequestMutation,
    verifyRequestMutation,
    setClickedRequest,
    status,
  });

  let loading = false;
  if (role === "admin") loading = enterprise.isLoading;
  if (role === "manager") loading = isLoading;

  return (
    <DoCheck isLoading={loading} isEmpty={requests?.length === 0}>
      <DiligenceTable header={headers} body={dataBody} />
    </DoCheck>
  );
};

export default CorporateRequestInfo;
