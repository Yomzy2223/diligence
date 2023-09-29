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
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";

interface propsType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  sidebarList: any[];
  pathname: string;
  handleLogout: () => void;
}

const MobileSidebar = ({ open, setOpen, sidebarList, pathname, handleLogout }: propsType) => {
  const { setQuery } = useGlobalFucntions();
  const { data } = useSession();
  const userRole = data?.user.role.toLowerCase();
  const enterpriseInfo = data?.enterprise;

  const router = useRouter();

  const handleNavigate = (link: string) => {
    router.push(link);
    setOpen(false);
  };

  const handleTrigger = (action: string) => {
    setQuery("action", action);
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      direction="right"
      className="p-5 pt-3 max-w-[80%] m-auto"
    >
      <div className="flex flex-col justify-between h-4/5">
        <div className=" py-4">
          <div className="flex justify-between items-center gap-4">
            <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} />
            <X className="cursor-pointer" size={16} onClick={() => setOpen(false)} />
          </div>

          <Separator />

          <div className="mt-6">
            {sidebarList.map((item, i) => {
              const active =
                i === 0
                  ? pathname === "/" || pathname?.startsWith("/requests")
                  : pathname?.startsWith(item.href);
              return (
                <Button
                  key={i}
                  variant="ghost2"
                  size="full"
                  className={cn(
                    "group flex justify-start px-4 py-3 rounded-lg ",
                    active && "bg-background-light text-primary "
                  )}
                  onClick={() => handleNavigate(item.href)}
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
                </Button>
              );
            })}
          </div>

          <Separator />

          <div className="mt-6">
            {userRole === "admin" && (
              <Button className="text-sm" onClick={() => handleTrigger("onboard-branch")}>
                Onboard a branch
              </Button>
            )}
            {userRole === "manager" && (
              <Button className="text-sm" onClick={() => handleTrigger("add-staff")}>
                Add staff
              </Button>
            )}
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
