"use client";

import EnterpriseInfo from "@/components/features/EnterpriseInfo";
import AddStaff from "@/components/features/dialog/addStaff";
import BranchOnboard from "@/components/features/dialog/onboardBranch";
import React from "react";
import Image from "next/image";
import arrowBack from "@/assets/icons/arrowBack.svg";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";
import { useSession } from "next-auth/react";

const Details = () => {
  const { data } = useSession();
  const { managerId } = useGlobalFucntions();

  const router = useRouter();
  
  const userRole = data?.user?.role?.toLowerCase();

  const isManager = userRole === "manager";
  const isAdmin = userRole === "admin";

  return (
    <div>
      {isAdmin && managerId && (
        <div className="flex pl-10 pb-2 pt-6 pr-6">
          <Button variant="ghost2" size="icon" onClick={() => router.push("/details")}>
            <Image src={arrowBack} alt="" />
            <span>Back</span>
          </Button>
        </div>
      )}
      <div
        className={cn(
          "flex flex-1 justify-between items-center pt-4 pb-6 pl-10 pr-6 mb-8 border-b border-border",
          {
            "pt-6": managerId,
          }
        )}
      >
        <p className="text-2xl font-semibold ">Details</p>
        {!managerId && <BranchOnboard>Onboard a branch</BranchOnboard>}
        {isManager && <AddStaff>Add staff</AddStaff>}
      </div>
      <div className="pl-10 pr-6">{<EnterpriseInfo />}</div>
    </div>
  );
};

export default Details;
