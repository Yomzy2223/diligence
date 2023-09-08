"use client";

import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import { ReactNode } from "react";
import ActiveNav2 from "@/components/activeNav/ActiveNav2";
import { Input } from "@/components/ui/input";
import { allStatus, RegStateType } from "./constants";
import { getEnterpriseInfo, getUserInfo } from "@/lib/globalFunctions";
import AddStaff from "@/components/features/dialog/addStaff";
import imageLoading from "@/assets/images/imageLoading.png";
import { useRequestStore } from "@/store/requestStore";

const Layout = ({ children }: { children: ReactNode }) => {
  const { setSearchValue, searchValue } = useRequestStore();

  const userRole = getUserInfo()?.data?.role?.toLowerCase();

  const enterpriseInfo = getEnterpriseInfo()?.data;

  return (
    <main className="flex flex-col px-6 pb-8">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} />
        <div className="flex flex-1 justify-between">
          <p className="text-2xl font-normal ">{enterpriseInfo?.name || ""}</p>
          {userRole === "admin" && <BranchOnboard>Onboard a branch</BranchOnboard>}
          {userRole === "manager" && <AddStaff>Add staff</AddStaff>}
        </div>
      </div>
      <CorporateRequest className="my-8" />

      <div className="flex justify-between items-center gap-8 mb-4">
        <ActiveNav2 nav={allStatus} defaultURL="/" />
        <Input
          variant="search"
          placeholder="Search for request..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {children}
    </main>
  );
};

export default Layout;
