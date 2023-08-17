"use client";

import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import gtbankImg from "@/assets/images/Gtbank.svg";
import { createContext, ReactNode, useReducer, useState } from "react";
import ActiveNav2 from "@/components/features/activeNav/ActiveNav2";
import { Search } from "@/components/features/Search";
import { Input } from "@/components/ui/input";

interface RegInfo {
  regNo: string;
  regName: string;
}

interface RequestType {
  regInfo: RegInfo;
  setRegInfo: React.Dispatch<React.SetStateAction<RegInfo>>;
}

export const RequestContext = createContext<RequestType | undefined>(undefined);

const Layout = ({ children }: { children: ReactNode }) => {
  const [regInfo, setRegInfo] = useState<RegInfo>({
    regNo: "",
    regName: "",
  });

  const allStatus = [
    { text: "Search History", path: "/requests/all" },
    { text: "Pending ", path: "/requests/pending" },
    { text: "In-Progress", path: "/requests/inprogress" },
    { text: "Completed", path: "/requests/completed" },
  ];

  return (
    <RequestContext.Provider value={{ regInfo, setRegInfo }}>
      <main className="flex flex-col ml-4 px-6">
        <div className="flex items-center gap-4 py-4 ">
          <Image src={gtbankImg} alt="" />
          <div className="flex flex-1 justify-between">
            <p className="text-2xl font-normal ">GTBank</p>
            <BranchOnboard buttonVariant="secondary">Onboard a branch</BranchOnboard>
          </div>
        </div>
        <CorporateRequest className="my-8" />

        <div className="flex justify-between items-center gap-8 mb-4">
          <ActiveNav2 nav={allStatus} />
          <Input variant="search" placeholder="Search for request..." />
        </div>
        {children}
      </main>
    </RequestContext.Provider>
  );
};

export default Layout;
