import Image from "next/image";
import React, { useEffect } from "react";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import { Separator } from "@/components/ui/separator";
import BranchOnboard from "../dialog/onboardBranch";
import { useRequests } from "@/hooks/useRequests";
import { Skeleton } from "@/components/ui/skeleton";

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
  const enterpriseInfo = enterprise.data?.data?.data;
  const branchInfo = branch.data?.data?.data;

  const { useViewBranchRequests } = useRequests();
  const { data, isFetching, refetch } = useViewBranchRequests(managerId);
  const branchRequests = data?.data?.data;
  const verifiedBranchReq = branchRequests?.filter(
    (el: any) => el?.status?.toLowerCase() === "verified"
  );

  const verifiedRequests = enterpriseInfo?.diligenceRequest?.filter(
    (el: any) => el?.status?.toLowerCase() === "completed"
  );

  useEffect(() => {
    if (role === "manager" || managerId) refetch();
  }, [managerId]);

  if (role === "admin" && !managerId)
    return (
      <div className="flex flex-1 gap-6">
        <Image
          src={enterpriseInfo?.logo || imageLoading}
          alt=""
          width={170}
          height={170}
          className="object-contain"
        />
        <div className="flex flex-1 gap-6 p-6 border border-border rounded">
          <div className="p-6 border border-border rounded">
            <p className="text-sm font-normal mb-6">ONBOARDED BRANCHES</p>
            <p className="text-3xl">
              {enterpriseInfo?.diligenceManager?.length >= 0
                ? enterpriseInfo?.diligenceManager?.length
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
              {enterpriseInfo?.diligenceRequest?.length >= 0
                ? enterpriseInfo?.diligenceRequest?.length
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
          src={enterpriseInfo?.logo || imageLoading}
          alt=""
          width={170}
          height={170}
          className="object-contain"
        />
        <div className="flex flex-1 gap-6 p-6 border border-border rounded min-h-[197px]">
          <div className="flex flex-col gap-2 justify-between ">
            <div>
              <p className="text-sm font-normal">Branch name</p>
              <div className="text-sm font-normal text-muted-foreground ">
                {!branch.isFetching ? branchInfo?.name || "--" : <Skeleton className="w-20 h-4" />}
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-normal">Branch admin email</p>
              <div className="text-sm font-normal text-muted-foreground">
                {!branch.isFetching ? (
                  branchInfo?.managerEmail || "--"
                ) : (
                  <Skeleton className="w-28 h-4" />
                )}
              </div>
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
            <div className="text-2xl">
              {!isFetching ? (
                verifiedBranchReq?.length >= 0 ? (
                  verifiedBranchReq?.length
                ) : (
                  "--"
                )
              ) : (
                <Skeleton className="w-8 h-6" />
              )}
            </div>
          </div>
          <div className="p-6 border border-border rounded">
            <p className="text-sm font-normal mb-6">TOTAL REQUESTS</p>
            <div className="text-2xl">
              {!isFetching ? (
                branchRequests?.length >= 0 ? (
                  branchRequests?.length
                ) : (
                  "--"
                )
              ) : (
                <Skeleton className="w-8 h-6" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default EnterpriseSummary;
