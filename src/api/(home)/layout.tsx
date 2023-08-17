"use client";
import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import gtbankImg from "@/assets/images/Gtbank.svg";
<<<<<<< HEAD:src/api/(home)/layout.tsx
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col ml-4 px-6">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={gtbankImg} alt="" />
        <div className="flex flex-1 justify-between">
          <p className="text-2xl font-normal ">Layout</p>
          <BranchOnboard buttonVariant="secondary">Onboard a branch</BranchOnboard>
        </div>
      </div>

      {children}
=======
import { redirect } from "next/navigation";
import CorporateRequestInfo from "@/components/features/corporateRequest/Info";

export default function Home() {
  return (
    <main className="flex flex-col px-6 ml-4">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={gtbankImg} alt="" />
        <div className="flex justify-between flex-1">
          <p className="text-2xl font-normal ">Home</p>
          <BranchOnboard buttonVariant={{ variant: "secondary" }}>Onboard a branch</BranchOnboard>
        </div>
      </div>

      <CorporateRequest className="my-8" />

      <div>
        <CorporateRequestInfo />
      </div>
>>>>>>> origin/staging:src/app/(dashboard)/page.tsx
    </main>
  );
};

export default Layout;
