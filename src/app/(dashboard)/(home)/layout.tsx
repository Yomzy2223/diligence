"use client";

import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import { ReactNode } from "react";
import ActiveNav2 from "@/components/activeNav/ActiveNav2";
import { allStatus } from "./constants";
import AddStaff from "@/components/features/dialog/addStaff";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import TheInput from "./input";
import { useSession } from "next-auth/react";
import ActiveNav from "@/components/activeNav";

const Layout = ({ children }: { children: ReactNode }) => {
  const { data } = useSession();

  let userRole = data?.user.role;

  let enterpriseInfo = data?.enterprise;

  const matches = matchMedia("(max-width: 767px)").matches;

  return (
    <main className="flex flex-col px-6 pb-8">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} />
        <div className="flex justify-between flex-1">
          <p className="text-2xl font-normal ">{enterpriseInfo?.name || ""}</p>
          {userRole === "Admin" && <BranchOnboard>Onboard a branch</BranchOnboard>}
          {userRole === "Manager" && <AddStaff>Add staff</AddStaff>}
        </div>
      </div>
      <CorporateRequest className="my-8" />

      <div className="flex items-center justify-between gap-8 mb-4">
        {matches ? (
          <ActiveNav nav={allStatus} defaultURL="/" />
        ) : (
          <ActiveNav2 nav={allStatus} defaultURL="/" />
        )}
        {!matches && <TheInput />}
      </div>
      {children}
    </main>
  );
};

export default Layout;
