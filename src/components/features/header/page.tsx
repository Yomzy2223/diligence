import React from 'react'
import { NotificationCard } from "@/components/features/Notifications/notifications";
import Settings from "@/stories/assets/Icons/Settings.svg";
import Logo from "@/stories/assets/Logo.png";
import { UserNav } from "@/components/features/user-nav";
import Image from "next/image";

const MainHeader = () => {
  return (
    <div className="border-b">
    <div className="flex h-20 items-center px-4">
        <div className="h-50 flex flex-col justify-center p-23">
            <Image src={Logo} alt={"sidebrief logo"} />
        </div>
      <div className="ml-auto flex items-center space-x-4">
        <div >
          <Image
            src={Settings}
            width={45}
            height={45}
            alt={"Settings icon"}
            className="block"
          />
        </div>

        <NotificationCard/>
       
        <UserNav />
      </div>
    </div>
  </div>
  )
}

export default MainHeader;