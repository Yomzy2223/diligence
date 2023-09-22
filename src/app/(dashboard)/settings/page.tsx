"use client";

import React from "react";
import { BankSettingInfo } from "@/components/features/BankSettingInfo";
import { SettingContext } from "@/components/features/BankSettingInfo/settingContext";
import Image from "next/image";
import { useEnterprise } from "@/hooks/useEnterprise";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import { useSession } from "next-auth/react";

export default function Settings() {
  const session = useSession();

  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const { data } = useViewEnterpriseByIdQuery(session.data?.enterprise.id!);
  const enterprise = data?.data?.data;

  return (
    <main className="flex flex-col px-6 ml-4 ">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={enterprise?.logo || imageLoading} width={80} height={80} alt="" />
        <div className="flex justify-between flex-1">
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
