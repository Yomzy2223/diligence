"use client";
import React from "react";
import { BankSettingInfo } from "@/components/features/BankSettingInfo";
import { SettingContext } from "@/components/features/settingContext";
import Image from "next/image";
import gtbankImg from "@/assets/images/Gtbank.svg";
import { useQuery } from "@tanstack/react-query";
import { viewEnterpriseByEmail } from "@/api/enterpriseApi";
export default function Settings() {
  const adminEmail = "bamidelesayo1@sidebrief.com";
  const singleEnterprise = useQuery(["viewEnterpriseByEmail", adminEmail], () =>
    viewEnterpriseByEmail(adminEmail)
  );
  const singleEnterpriseData = singleEnterprise?.data?.data?.data;
  console.log(singleEnterpriseData);

  return (
    <main className="flex flex-col ml-4 px-6 ">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={gtbankImg} alt="" />
        <div className="flex flex-1 justify-between">
          <p className="text-2xl font-normal ">Settings</p>
        </div>
      </div>

      <div className="my-10">
        <BankSettingInfo
          name={singleEnterpriseData?.name}
          image={gtbankImg}
          address={singleEnterpriseData?.address}
          adminName={"Mr. Oluwole"}
          adminEmail={singleEnterpriseData?.adminEmail}
          regUrl="https/www/sidebrief.diligence/gtbank.com"
        />
      </div>

      <div className="my-7">
        <SettingContext />
      </div>
    </main>
  );
}
