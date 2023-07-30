import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Notification from "@/stories/assets/Icons/Notification.svg";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const userNotifications = [
  {
    id: "1",
    title: "Your monthly payment is due.",
    message: "Your monthly payment is due on the 24th of this month",
    timeline: "2 mins ago",
  },
  {
    id: "2",
    title: "Access Request",
    message: "Ola@gtbank.com request for access to the dashboard",
    timeline: "1 min ago",
  },
  {
    id: "3",
    title: "Your monthly payment is due.",
    message: "Your monthly payment is due on the 24th of this month",
    timeline: "just now",
  },
  {
    id: "4",
    title: "Your monthly payment is due.",
    message: "Your monthly payment is due on the 24th of this month",
    timeline: "5 min ago",
  },
];

// type CardProps = React.ComponentProps<typeof Card>

export const NotificationCard = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Image src={Notification} alt={"profile icon"} className="w-8 h-8 " />
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-380 m-4" align="end" forceMount>
        <>
          <div className="flex items-center justify-between space-y-2 m-4">
            <div>
              <CardTitle className="flex items-center">
                <p className="text-sm font-semibold">Notifications</p>
              </CardTitle>
            </div>
            <div className="flex items-center space-x-3 mx-1">
              <p className="text-[#DE4A09] underline">Delete</p>
              <p className="underline">Clear all</p>
            </div>
          </div>

          <div className="notificationsContainer m-4">
            {userNotifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <Checkbox />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{notification.title}</p>
                    <p className="text-xs text-muted-foregroun py-2">{notification.message}</p>
                  </div>
                  <div className="timeline text-sm whitespace-nowrap mb-7">
                    <p>{notification?.timeline}</p>
                  </div>
                </div>

                <div className="buttons flex m-5 space-x-4">
                  <div>
                    <Button
                      variant={"outline"}
                      className="justify-center items-center text-[#DE4A09] gap-2 rounded-8 border-2 border-[#DE4A09] bg-transparent"
                    >
                      Decline
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-[#DE4A09]">Accept</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
