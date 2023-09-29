"use client";

import { ReactNode, useEffect } from "react";
import Image from "next/image";
import sidebriefLogo from "@/assets/png/sidebriefLogo.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slidesInfo } from "./constants";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
interface authLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: authLayoutProps) => {
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      const swiper = new Swiper(".swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        modules: [Navigation, Pagination, Autoplay],
        autoplay: {
          delay: 5000,
        },
        scrollbar: false,
        loop: true,
        grabCursor: true,
        mousewheel: {
          invert: true,
        },
        observer: true,
        speed: 500,
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center">
      <div className="flex flex-1 w-2/3 justify-center items-center ">
        <div className="flex flex-col justify-center max-w-[429px] w-full m-6">
          <div className="flex mb-14 items-center">
            <Image src={sidebriefLogo} alt="logo" />
          </div>
          <div>{children}</div>
        </div>
      </div>

      <div className="relative hidden w-0 flex-1 lg:block overflow-hidden">
        <div className="flex flex-col gap-2 justify-center items-center h-screen max-w-[100%] auth-background">
          <div className="swiper max-w-[80%] rounded-2xl mb-4">
            <div className="swiper-wrapper">
              {slidesInfo.map((el, i) => (
                <div key={i} className="swiper-slide p-6 space-y-6">
                  <p className="my-auto text-4xl text-white text-center">{el}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-pagination !relative "></div>
        </div>
      </div>
      


    </div>
  );
};
