"use client";
import Image from "next/image";

import Profile from "@/stories/assets/Icons/Profile.svg";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export const UserNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/auth/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Image src={Profile} alt={"profile icon"} className="w-8 h-8" />
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 m-4 mt-0" align="end" forceMount>
        <DropdownMenuGroup className="text-lg">
          <DropdownMenuItem className="py-3">Profile</DropdownMenuItem>
          <DropdownMenuItem className="py-3 text-red-700 " onClick={handleLogout}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
