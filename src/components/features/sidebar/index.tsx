"use client";

import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import HomeIcon from "@/assets/icons/homeIcon";
import DetailsIcon from "@/assets/icons/detailsIcon";
import SettingsIcon from "@/assets/icons/settingsIcon";
import LogoutIcon from "@/assets/icons/logoutIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { getEnterpriseInfo, setColor } from "@/lib/globalFunctions";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  const session = useSession();
  const userRole = session.data?.user.role.toLowerCase();

  const handleLogout = () => {
    localStorage.clear();
    signOut({ redirect: false });
    router.push("/auth/login");
  };

  useEffect(() => {
    const brandColor = getEnterpriseInfo()?.data?.color;
    if (brandColor) setColor(brandColor);
  }, []);

  if (userRole === "staff") sidebarItems = sidebarItems.filter((el) => el.href !== "/details");

  return (
    <motion.div
      className={cn(
        "flex flex-col flex-1 gap-12 border-r border-border w-[237px] h-full py-4 px-6 ",
        !open && "w-max"
      )}
      animate={open ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <Button
        variant="transparent"
        className="px-0 py-0 mx-3 min-w-max h-max "
        onClick={() => setOpen(!open)}
      >
        <BiMenu className="w-6 h-6" />
      </Button>
      <div className="flex flex-col justify-between flex-1 text-sm ">
        <div className="flex flex-col gap-2 overflow-x-hidden ">
          {sidebarItems.map((item, i) => {
            const active =
              i === 0
                ? pathname === "/" || pathname?.startsWith("/requests")
                : pathname?.startsWith(item.href);
            return (
              <Link
                href={item.href}
                key={i}
                className={cn(
                  "group flex px-4 py-3 rounded-lg ",
                  active && "bg-background-light text-primary "
                )}
              >
                <div className="flex items-center gap-2 ">
                  <item.icon
                    className={{ path: cn("group-hover:fill-primary", active && "fill-primary") }}
                  />
                  {open && (
                    <span
                      className={cn(
                        "text-inherit group-hover:text-primary",
                        active && "text-primary"
                      )}
                    >
                      {item.text}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <Button variant="ghost2" onClick={handleLogout} className="justify-start w-full">
          <div className="flex items-center gap-2 ">
            <LogoutIcon />
            {open && <p className="text-destructive">Logout</p>}
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default Sidebar;

//
let sidebarItems = [
  { href: "/", text: "Home", icon: HomeIcon },
  { href: "/details", text: "Details", icon: DetailsIcon },
  { href: "/settings", text: "Settings", icon: SettingsIcon },
];
//
const variants = {
  open: { width: "237px" },
  closed: { width: "101px" },
};
