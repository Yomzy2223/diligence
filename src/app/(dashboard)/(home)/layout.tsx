"use client";

import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import gtbankImg from "@/assets/images/Gtbank.svg";
import { createContext, ReactNode, useReducer, useState } from "react";
import ActiveNav2 from "@/components/features/activeNav/ActiveNav2";
import { Input } from "@/components/ui/input";
import { allStatus, RegStateType, RequestType } from "./constants";
import { getUserInfo } from "@/lib/globalFunctions";
import AddStaff from "@/components/features/dialog/addStaff";

export const RequestContext = createContext<RequestType | undefined>(undefined);

const Layout = ({ children }: { children: ReactNode }) => {
  const [regState, setRegState] = useState<RegStateType>({
    requestId: "",
    regNo: "",
    regName: "",
    searchValue: "",
    refetchData: false,
  });

  const userRole = getUserInfo()?.data?.role?.toLowerCase();

  return (
    <RequestContext.Provider value={{ regState, setRegState }}>
      <main className="flex flex-col px-6 pb-8">
        <div className="flex items-center gap-4 py-4 ">
          <Image src={gtbankImg} alt="" />
          <div className="flex flex-1 justify-between">
            <p className="text-2xl font-normal ">GTBank</p>
            {userRole === "admin" && <BranchOnboard>Onboard a branch</BranchOnboard>}
            {userRole === "manager" && <AddStaff>Add staff</AddStaff>}
          </div>
        </div>
        <CorporateRequest className="my-8" />

        <div className="flex justify-between items-center gap-8 mb-4">
          <ActiveNav2 nav={allStatus} />
          <Input
            variant="search"
            placeholder="Search for request..."
            onChange={(e) => setRegState({ ...regState, searchValue: e.target.value })}
          />
        </div>
        {children}
      </main>
    </RequestContext.Provider>
  );
};

export default Layout;
