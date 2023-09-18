"use client";

import React from "react";
import { BankSettingInfo } from "@/components/features/BankSettingInfo";
import { SettingContext } from "@/components/features/BankSettingInfo/settingContext";
import Image from "next/image";
import { useEnterprise } from "@/hooks/useEnterprise";
import { getUserInfo } from "@/lib/globalFunctions";
import imageLoading from "@/assets/images/imagePlaceholder.png";

export default function Settings() {
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const { data } = useViewEnterpriseByIdQuery(getUserInfo()?.data?.enterpriseId);
  const enterprise = data?.data?.data;

  return (
    <main className="flex flex-col ml-4 px-6 ">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={enterprise?.logo || imageLoading} width={80} height={80} alt="" />
        <div className="flex flex-1 justify-between">
          <p className="text-2xl font-normal ">Settings</p>
        </div>
      </div>

      <div className="my-10">
        <BankSettingInfo
          name={enterprise?.name}
          image={enterprise?.logo || imageLoading}
          address={enterprise?.address}
          adminName={"Mr. Oluwole"}
          adminEmail={enterprise?.adminEmail}
        />
      </div>

      <div className="my-7">
        <SettingContext />
      </div>
    </main>
  );
}
