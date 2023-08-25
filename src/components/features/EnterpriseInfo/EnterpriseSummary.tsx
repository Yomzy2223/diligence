import Image from "next/image";
import React from "react";
import imageLoading from "@/assets/images/imageLoading.png";
import { Separator } from "@/components/ui/separator";
import BranchOnboard from "../dialog/onboardBranch";
import { useRequests } from "@/hooks/useRequests";

const EnterpriseSummary = ({
  role,
  managerId,
  enterprise,
  branch,
}: {
  role: string;
  managerId: string;
  enterprise: any;
  branch: any;
}) => {
  enterprise = enterprise?.data?.data?.data;
  const branchInfo = branch?.data?.data?.data;

  const { useViewBranchRequests } = useRequests();
  const { data } = useViewBranchRequests({ managerId, managerEmail: branchInfo?.managerEmail });
  const branchRequests = data?.data?.data;
  const verifiedBranchReq = branchRequests?.filter(
    (el: any) => el?.status?.toLowerCase() === "verified"
  );

  const verifiedRequests = enterprise?.diligenceRequest?.filter(
    (el: any) => el?.status?.toLowerCase() === "completed"
  );

  if (role === "admin" && !managerId)
    return (
      <div className="flex flex-1 gap-6">
        <Image
          src={enterprise?.logo || imageLoading}
          alt=""
          width={170}
          height={170}
          className="object-contain"
        />
        <div className="flex flex-1 gap-6 p-6 border border-border rounded">
          <div className="p-6 border border-border rounded">
            <p className="text-sm font-normal mb-6">ONBOARDED BRANCHES</p>
            <p className="text-3xl">
              {enterprise?.diligenceManager?.length >= 0
                ? enterprise?.diligenceManager?.length
                : "--"}
            </p>
          </div>
          <div className="p-6 border border-border rounded">
            <p className="text-sm font-normal mb-6">BUSINESSES VERIFIED</p>
            <p className="text-3xl">
              {verifiedRequests?.length >= 0 ? verifiedRequests?.length : "--"}
            </p>
          </div>
          <div className="p-6 border border-border rounded">
            <p className="text-sm font-normal mb-6">TOTAL REQUESTS</p>
            <p className="text-3xl">
              {enterprise?.diligenceRequest?.length >= 0
                ? enterprise?.diligenceRequest?.length
                : "--"}
            </p>
          </div>
        </div>
      </div>
    );

  if (role === "manager" || managerId)
    return (
      <div className="flex flex-1 gap-6">
        <Image
          src={enterprise?.logo || imageLoading}
          alt=""
          width={170}
          height={170}
          className="object-contain"
        />
        <div className="flex flex-1 gap-6 p-6 border border-border rounded">
          <div className="flex flex-col gap-2 justify-between ">
            <div>
              <p className="text-sm font-normal">Branch name</p>
              <p className="text-sm font-normal text-muted-foreground ">
                {branchInfo?.name || "--"}
              </p>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-normal">Branch admin email</p>
              <p className="text-sm font-normal text-muted-foreground">
                {branchInfo?.managerEmail || "--"}
              </p>
            </div>
            {role === "admin" && (
              <BranchOnboard
                variant="ghost2"
                size="icon"
                className="underline"
                branch={branch}
                managerId={managerId}
              >
                Edit
              </BranchOnboard>
            )}
          </div>
          <div className="p-6 border border-border rounded">
            <p className="text-sm font-normal mb-6">BUSINESSES VERIFIED</p>
            <p className="text-2xl">
              {verifiedBranchReq?.length >= 0 ? verifiedBranchReq?.length : "--"}
            </p>
          </div>
          <div className="p-6 border border-border rounded">
            <p className="text-sm font-normal mb-6">TOTAL REQUESTS</p>
            <p className="text-2xl">
              {branchRequests?.length >= 0 ? branchRequests?.length : "--"}
            </p>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default EnterpriseSummary;
