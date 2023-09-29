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
import { Search } from "lucide-react";

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
          "flex flex-1 justify-between items-center px-5 py-2 mb-4 border-b border-border md:pt-4 md:pb-6 md:pl-10 md:pr-6 md:mb-8",
          {
            "pt-6": managerId,
          }
        )}
      >
        <p className="text-lg font-semibold md:text-2xl">Details</p>
        {!managerId && <BranchOnboard className="hidden md:block">Onboard a branch</BranchOnboard>}
        {isManager && <AddStaff className="hidden md:block">Add staff</AddStaff>}
        <Search className="md:hidden" width={16} />
      </div>
      <div className="px-5 md:pl-10 md:pr-6">{<EnterpriseInfo />}</div>
    </div>
  );
};

export default Details;
