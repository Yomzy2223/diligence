"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import HomeIcon from "@/assets/icons/homeIcon";
import DetailsIcon from "@/assets/icons/detailsIcon";
import SettingsIcon from "@/assets/icons/settingsIcon";
import LogoutIcon from "@/assets/icons/logoutIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const pathname = usePathname();

  const variants = {
    open: { width: "237px" },
    closed: { width: "max-content" },
  };

  const sidebarItems = [
    { href: "/", text: "Home", icon: HomeIcon },
    { href: "/details", text: "Details", icon: DetailsIcon },
    { href: "/settings", text: "Settings", icon: SettingsIcon },
  ];

  return (
    <motion.div
      className={cn(
        "flex flex-col flex-1 gap-12 border-r border-border w-[237px] py-4 px-6 transition-all ease-in-out duration-200 ",
        !open && "w-max"
      )}
      animate={open ? "open" : "closed"}
      variants={variants}
    >
      <Button
        variant="transparent"
        className="mx-3 px-0 py-0 min-w-max h-max "
        onClick={() => setOpen(!open)}
      >
        <BiMenu className="w-5 h-5" />
      </Button>
      <div className="flex flex-col flex-1 justify-between text-xs ">
        <div className="flex flex-col gap-2 ">
          {sidebarItems.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className={cn(
                "group flex items-center gap-2 px-4 py-3 hover:text-cm-blue rounded-lg ",
                pathname?.startsWith(item.href) && "bg-cm-blue-100"
              )}
            >
              <item.icon className={{ path: "group-hover:fill-cm-blue" }} />
              {open && <span className="text-inherit">{item.text}</span>}
            </Link>
          ))}
        </div>
        <Link href="" className="flex items-center gap-2 px-4 py-3 ">
          <LogoutIcon />
          {open && <p>Logout</p>}
        </Link>
      </div>
    </motion.div>
  );
};

export default Sidebar;
