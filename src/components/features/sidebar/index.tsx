"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getEnterpriseInfo, setColor } from "@/lib/globalFunctions";
import { signOut, useSession } from "next-auth/react";
import { sidebarItems } from "@/lib/config";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";

interface propsType {
  mobile?: boolean;
  openMobile?: boolean;
  setOpenMobile?: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ mobile, openMobile, setOpenMobile }: propsType) => {
  const router = useRouter();
  const pathname = usePathname();

  const session = useSession();
  const userRole = session.data?.user.role.toLowerCase();

  const handleLogout = async () => {
    await signOut({ redirect: true });
    router.push("/auth/login");
  };

  useEffect(() => {
    const brandColor = getEnterpriseInfo()?.data?.color;
    if (brandColor) setColor(brandColor);
  }, []);

  let sidebarList = sidebarItems;
  if (userRole === "staff") sidebarList = sidebarItems.filter((el) => el.href !== "/details");

  return (
    <>
      {mobile ? (
        openMobile && setOpenMobile ? (
          <MobileSidebar
            open={openMobile}
            setOpen={setOpenMobile}
            pathname={pathname}
            sidebarList={sidebarList}
            handleLogout={handleLogout}
          />
        ) : null
      ) : (
        <DesktopSidebar pathname={pathname} sidebarList={sidebarList} handleLogout={handleLogout} />
      )}
    </>
  );
};

export default Sidebar;
