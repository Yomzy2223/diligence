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
import { Search } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => {
  const { data } = useSession();

  let userRole = data?.user.role.toLowerCase();

  let enterpriseInfo = data?.enterprise;

  const matches = matchMedia("(max-width: 767px)").matches;

  return (
    <main className="flex flex-col px-6 pb-8">
      <div className="flex items-center justify-between gap-4 py-4 z-[5] sticky top-0 bg-background md:hidden">
        <p className="text-xl font-normal ">{enterpriseInfo?.name || ""}</p>
        <Search width={20} />
      </div>

      <div className="items-center gap-4 py-4 hidden md:flex">
        <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} />
        <div className="flex justify-between flex-1">
          <p className="text-2xl font-normal ">{enterpriseInfo?.name || ""}</p>
          {userRole === "admin" && <BranchOnboard>Onboard a branch</BranchOnboard>}
          {userRole === "manager" && <AddStaff>Add staff</AddStaff>}
        </div>
      </div>
      <div className="md:hidden">
        {userRole === "admin" && <BranchOnboard mobile={true} />}
        {userRole === "manager" && <AddStaff mobile={true} />}
      </div>
      <CorporateRequest className="my-4 mb-8" />

      <div className="flex items-center justify-between gap-8 mb-4 sticky top-[60px] md:top-0">
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
