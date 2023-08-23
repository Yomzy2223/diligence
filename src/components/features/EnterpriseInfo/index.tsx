import React, { useState } from "react";
import { useEnterprise, useEnterpriseBranch } from "@/hooks/useEnterprise";
import { getUserInfo } from "@/lib/globalFunctions";
import EnterpriseSummary from "./EnterpriseSummary";
import { useSearchParams } from "next/navigation";
import { DiligenceTable } from "../DiligenceTable";
import { useActions } from "./actions";
import { Input } from "@/components/ui/input";
import DoCheck from "@/components/DoCheck";
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";

const EnterpriseInfo = () => {
  const [searchValue, setSearchValue] = useState("");
  const { managerId } = useGlobalFucntions();

  const userInfo = getUserInfo()?.data;
  const role = userInfo?.role?.toLowerCase();
  const enterpriseId = userInfo?.enterpriseId;

  const { useViewBranchByIdQuery } = useEnterpriseBranch();
  const { useViewEnterpriseByIdQuery } = useEnterprise();

  const branch = useViewBranchByIdQuery(managerId || "");
  const enterprise = useViewEnterpriseByIdQuery(enterpriseId);

  const { branchHeaders, branchBody, adminHeaders, adminBody, handleManagerClick } = useActions({
    enterprise,
    searchValue,
    managerId,
  });

  return (
    <div className="space-y-8">
      <EnterpriseSummary
        role={role}
        managerId={managerId}
        enterprise={enterprise}
        branch={branch}
      />

      {role === "admin" && !managerId && (
        <div>
          <div className="flex justify-between items-center gap-8 mb-4">
            <p className="font-semibold">Onboarded Branches</p>
            {adminBody?.length > 0 && (
              <Input
                variant="search"
                placeholder="Search branch..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
          </div>
          <DoCheck isLoading={enterprise.isLoading} isEmpty={adminBody?.length === 0}>
            <DiligenceTable
              header={adminHeaders}
              body={adminBody}
              onRowClick={handleManagerClick}
            />
          </DoCheck>
        </div>
      )}

      {(role === "manager" || managerId) && (
        <div>
          <div className="flex justify-between items-center gap-8 mb-4">
            <p className="font-semibold">All Staff</p>
            {branchBody?.length > 0 && (
              <Input
                variant="search"
                placeholder="Search staff..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
          </div>
          <DoCheck isLoading={branch.isLoading} isEmpty={branchBody?.length === 0}>
            <DiligenceTable header={branchHeaders} body={branchBody} />
          </DoCheck>
        </div>
      )}
    </div>
  );
};

export default EnterpriseInfo;
