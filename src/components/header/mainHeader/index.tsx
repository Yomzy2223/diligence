"use client";

import React, { useState } from "react";
import Settings from "@/stories/assets/Icons/Settings.svg";
import Logo from "@/stories/assets/Logo.png";
import { UserNav } from "@/components/features/user-nav";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { setColor } from "@/lib/globalFunctions";
import { useSession } from "next-auth/react";
import { Menu } from "lucide-react";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import Sidebar from "@/components/features/sidebar";
import BranchOnboard from "@/components/features/dialog/onboardBranch";
import AddStaff from "@/components/features/dialog/addStaff";

const MainHeader = () => {
  const [openMobileSidebar, setopenMobileSidebar] = useState(false);

  const { data } = useSession();

  let enterpriseInfo = data?.enterprise;
  let userRole = data?.user.role.toLowerCase();

  setColor(enterpriseInfo?.color);

  return (
    <div className="border-b sticky top-0 bg-white z-10">
      {/* Desktop header */}
      <div className="hidden items-center px-6 py-2 md:flex">
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
          <UserNav />
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex items-center justify-between gap-6 md:hidden px-5">
        <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} />
        {!openMobileSidebar && (
          <Menu className="w-6 h-6" onClick={() => setopenMobileSidebar(true)} />
        )}
        <Sidebar
          mobile={true}
          openMobile={openMobileSidebar}
          setOpenMobile={setopenMobileSidebar}
        />
      </div>

      <div className="md:hidden">
        {userRole === "admin" && <BranchOnboard mobile={true} />}
        {userRole === "manager" && <AddStaff mobile={true} />}
      </div>
    </div>
  );
};

export default MainHeader;
