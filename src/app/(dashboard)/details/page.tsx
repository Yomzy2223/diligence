"use client";

import { BankInfo } from "@/components/features/BankInfo";
import { Button } from "@/components/ui/button";
import Gtbank from "@/assets/bank/gt-bank-original.png";

import React, { useState } from "react";
import { Search } from "@/components/features/Search";
import { Tab } from "./constants";
import { cn } from "@/lib/utils";
import { DraftTable, OnboardTable } from "./tables";
import { useQuery } from "@tanstack/react-query";
import { viewEnterpriseByEmail } from "@/api/bankApi";
import { format, parseJSON } from "date-fns";
import { DiligenceTable } from "@/components/features/DiligenceTable";
import BranchOnboard from "@/components/features/dialog/onboardBranch";
import { Skeleton } from "@/components/ui/skeleton";

const Details = () => {
  const adminEmail = "femiadeyemo008@gmail.com";
  const headers = ["S/N", "Date added", "Branch name", "Branch state", "Branch Manager email"];

  const enterprise = useQuery(["viewEnterpriseByEmail", adminEmail], () =>
    viewEnterpriseByEmail(adminEmail)
  );
  console.log(enterprise);

  
  const enterpriseData = enterprise?.data?.data?.data;
  const dataBody = enterpriseData?.diligenceManager?.map((el: any, index: number) => [
    index + 1,
    format(parseJSON(el.updatedAt), "dd/MM/yyyy"),
    el.name,
    el?.location,
    el?.managerEmail,
  ]);

  return (
    <div>
      <div className="py-4 pl-10 pr-6 w-full border-b border-[#EDF1F6]">
        <div className="w-full flex justify-between items-center h-[71px]">
          <p className="text-2xl font-normal text-gray-900 leading-[130%]"> Onboarded branch(es)</p>
          <div className="flex w-full max-w-[364px] gap-6 justify-center item-center">
            <Button type="submit" variant="orangeOutline" size="full">
              See payment invoice
            </Button>
            <BranchOnboard buttonVariant={{ variant: "secondary", size: "full" }}>
              Onboard a branch
            </BranchOnboard>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full gap-8 px-8 pl-10 pr-6">
        <div className="w-full">
          <BankInfo
            image={Gtbank.src}
            name={enterpriseData?.name}
            branch={false}
            numberOfOnboardedBranches={enterpriseData?.diligenceManager?.length}
            numberOfBusinesssVerified={enterpriseData?.diligenceRequest?.length}
            totalAmountSpent={289323}
          />
        </div>
        <div className="w-full payment "></div>
        <div className=" w-full border border-[#EDF1F6] rounded p-6">
          <div className="flex items-center justify-between w-full h-14 ">
            <p className="text-xl font-normal text-gray-900 leading-[130%]">
              {" "}
              Onboarded branch(es)
            </p>
            <div className="flex max-w-[373px] w-full h-14">
              <Search />
            </div>
          </div>
          <div className="flex items-center w-full ">
            {/* {Tab?.map((el: any, index) => (
              <div
                
                key={index}
                className={cn("flex pl-4 h-16 items-center justify-center gap-4", {
                  "border-b-4  border-[#00A2D4]": el?.name === activeTab,
                })}
              >
                <p className="text-base not-italic font-normal leading-6">{el?.name}</p>
                <div className="flex py-1 px-3 flex-col justify-center items-center rounded-[10px] bg-tab">
                  <p className="text-sm not-italic font-normal text-[#00A2D4]">{el?.length}</p>
                </div>
              </div>
            ))} */}
          </div>
          <div className="w-full">
            {enterprise?.isLoading ?(
              <Skeleton className="w-[100px] h-[20px] rounded-full" />):
            (
            <DiligenceTable header={headers} body={dataBody} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
