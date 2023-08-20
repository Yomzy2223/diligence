"use client";

import EnterpriseInfo from "@/components/features/EnterpriseInfo";
import AddStaff from "@/components/features/dialog/addStaff";
import BranchOnboard from "@/components/features/dialog/onboardBranch";
import { getUserInfo } from "@/lib/globalFunctions";
import React from "react";

const Details = () => {
  const userRole = getUserInfo()?.data?.role?.toLowerCase();

  return (
    <div>
      <div className="flex flex-1 justify-between py-6 pl-10 pr-6 mb-8 border-b border-border">
        <p className="text-2xl font-semibold ">Details</p>
        {userRole === "admin" && <BranchOnboard>Onboard a branch</BranchOnboard>}
        {userRole === "manager" && <AddStaff>Add staff</AddStaff>}
      </div>
      <div className="pl-10 pr-6">{<EnterpriseInfo />}</div>
    </div>
  );
};

export default Details;
