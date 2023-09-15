"use client";
import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import gtbankImg from "@/assets/images/Gtbank.svg";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col ml-4 px-6">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={gtbankImg} alt="" />
        <div className="flex flex-1 justify-between">
          <p className="text-2xl font-normal ">Layout</p>
          <BranchOnboard>Onboard a branch</BranchOnboard>
        </div>
      </div>

      {children}
    </main>
  );
};

export default Layout;
