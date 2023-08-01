import { ReactNode } from "react";
import Image from "next/image";
import sidebriefLogo from "@/assets/png/sidebriefLogo.png";
import AuthBg from "@/assets/svg/AuthBg.svg";

interface authLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: authLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex items-center">
      <div className="flex flex-1 justify-center items-center ">
        <div className="flex flex-col justify-center max-w-[429px] w-full">
          <div className="flex  mb-14 items-center">
            <Image src={sidebriefLogo} alt="logo" />
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div className="flex-1 h-screen auth-background">
        <p className="flex text-[40px] translate-x-[50%] max-w-[498px] tracking-[-0.8px] w-full leading-[130%] not-italic font-normal text-center absolute top-[50%] right-[50%] text-white">
          Verify Businesses and get reports immediately with Sidebrief.
        </p>
      </div>
    </div>
  );
};
