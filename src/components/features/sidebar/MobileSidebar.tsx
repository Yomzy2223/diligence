"use client";

import { cn } from "@/lib/utils";
import { LogOutIcon, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import AddStaff from "../dialog/addStaff";
import BranchOnboard from "../dialog/onboardBranch";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import { Button } from "@/components/ui/button";

interface propsType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  sidebarList: any[];
  pathname: string;
  handleLogout: () => void;
}

const MobileSidebar = ({ open, setOpen, sidebarList, pathname, handleLogout }: propsType) => {
  const { data } = useSession();
  const userRole = data?.user.role.toLowerCase();
  const enterpriseInfo = data?.enterprise;

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      direction="right"
      className="p-5 pt-3 max-w-[80%] m-auto"
    >
      <div className="flex flex-col justify-between h-4/5">
        <div className=" py-4">
          <div className="flex justify-between items-center gap-4 mb-6">
            <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} />
            <X className="cursor-pointer" size={16} onClick={() => setOpen(false)} />
          </div>

          {sidebarList.map((item, i) => {
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
                    className={{
                      path: cn("group-hover:fill-primary", active && "fill-primary"),
                      svg: "w-4",
                    }}
                  />
                  <span
                    className={cn(
                      "text-inherit group-hover:text-primary text-sm",
                      active && "text-primary"
                    )}
                  >
                    {item.text}
                  </span>
                </div>
              </Link>
            );
          })}

          <div className="mt-6">
            {userRole === "admin" && (
              <BranchOnboard className="text-sm">Onboard a branch</BranchOnboard>
            )}
            {userRole === "manager" && <AddStaff className="text-sm">Add staff</AddStaff>}
          </div>
        </div>

        <Button variant="ghost2" onClick={handleLogout} className="justify-start w-full">
          <div className="flex items-center gap-2 ">
            <LogOutIcon color="hsl(var(--destructive))" width={16} />
            {open && <p className="text-destructive">Logout</p>}
          </div>
        </Button>
      </div>
    </Drawer>
  );
};

export default MobileSidebar;
