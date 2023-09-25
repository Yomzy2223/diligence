"use client";

import DoCheck from "@/components/DoCheck";
import { useEnterprise } from "@/hooks/useEnterprise";
import { useRequests } from "@/hooks/useRequests";
import React from "react";
import { useActions } from "./useActions";
import { useSession } from "next-auth/react";
import { DiligenceTable } from "@/components/DiligenceTable";

const CorporateRequestInfo = ({ status }: { status?: string }) => {
  const session = useSession();
  const userInfo = session.data?.user;
  const role = userInfo?.role.toLowerCase();

  // API calls
  const { deleteRequestMutation, useViewBranchRequests, verifyRequestMutation } = useRequests();
  const { data, isLoading } = useViewBranchRequests(userInfo?.managerId!);
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterprise = useViewEnterpriseByIdQuery(session.data?.enterprise.id!);

  // Actions
  const { headers, dataBody, requests } = useActions({
    data,
    enterprise,
    deleteRequestMutation,
    verifyRequestMutation,
    status,
  });

  let loading = false;
  if (role === "admin") loading = enterprise.isLoading;
  if (role === "manager") loading = isLoading;

  console.log(dataBody);
  return (
    <DoCheck isLoading={loading} isEmpty={dataBody?.length === 0} emptyTitle="No Request">
      <DiligenceTable header={headers} body={dataBody} />
    </DoCheck>
  );
};

export default CorporateRequestInfo;
