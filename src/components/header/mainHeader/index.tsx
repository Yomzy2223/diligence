"use client";

import React from "react";
import { NotificationCard } from "@/components/features/Notifications/notifications";
import Settings from "@/stories/assets/Icons/Settings.svg";
import Logo from "@/stories/assets/Logo.png";
import { UserNav } from "@/components/features/user-nav";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { setColor } from "@/lib/globalFunctions";
import { useSession } from "next-auth/react";

const MainHeader = () => {
  const { data } = useSession();

  let enterpriseInfo = data?.enterprise;

  setColor(enterpriseInfo?.color || "194 100% 42%");

  return (
    <div className="border-b sticky top-0 bg-white z-10">
      <div className="flex items-center px-6 py-2">
        <div className=" flex flex-col justify-center p-23">
          <Image src={Logo} alt={"sidebrief logo"} className="h-6 w-auto" />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link
            href="/settings"
            className={buttonVariants({ variant: "transparent", size: "icon" })}
          >
            <Image src={Settings} alt={"Settings icon"} className="block w-8 h-8 " />
          </Link>
          {/* <NotificationCard /> */}
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
