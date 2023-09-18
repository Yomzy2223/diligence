"use client";

import type { Metadata } from "next";
import Sidebar from "@/components/features/sidebar";
import MainHeader from "@/components/header/mainHeader";
import { getUserInfo } from "@/lib/globalFunctions";
import { redirect } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const userToken = getUserInfo()?.data?.token;
  if (!true) redirect("/auth/login");

  return (
    <div className="flex flex-col h-screen">
      <MainHeader />
      <div className="flex flex-1 ">
        <div>
          <Sidebar />
        </div>
        <div className="w-full max-h-[calc(100vh-61px)] overflow-auto ">{children}</div>
      </div>
    </div>
  );
}
