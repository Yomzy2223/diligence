"use client";

import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import gtbankImg from "@/assets/images/Gtbank.svg";
import { createContext, ReactNode, useReducer, useState } from "react";
import ActiveNav2 from "@/components/features/activeNav/ActiveNav2";
import { Input } from "@/components/ui/input";
import { allStatus, RegInfo, RequestType } from "./constants";

export const RequestContext = createContext<RequestType | undefined>(undefined);

const Layout = ({ children }: { children: ReactNode }) => {
  const [regInfo, setRegInfo] = useState<RegInfo>({
    requestId: "",
    regNo: "",
    regName: "",
    searchValue: "",
  });

  return (
    <RequestContext.Provider value={{ regInfo, setRegInfo }}>
      <main className="flex flex-col px-6 pb-8">
        <div className="flex items-center gap-4 py-4 ">
          <Image src={gtbankImg} alt="" />
          <div className="flex flex-1 justify-between">
            <p className="text-2xl font-normal ">GTBank</p>
            <BranchOnboard>Onboard a branch</BranchOnboard>
          </div>
        </div>
        <CorporateRequest className="my-8" />

        <div className="flex justify-between items-center gap-8 mb-4">
          <ActiveNav2 nav={allStatus} />
          <Input
            variant="search"
            placeholder="Search for request..."
            onChange={(e) => setRegInfo({ ...regInfo, searchValue: e.target.value })}
          />
        </div>
        {children}
      </main>
    </RequestContext.Provider>
  );
};

export default Layout;
