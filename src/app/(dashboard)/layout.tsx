"use client";

import type { Metadata } from "next";
import Sidebar from "@/components/features/sidebar";
import MainHeader from "@/components/header/mainHeader";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/getServerSession";
import tinycolor from "tinycolor2";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // if (status === "unauthenticated") redirect("/auth/login");

  // let enterpriseInfo = data?.enterprise;
  // setColor(server?.enterprise?.color || "194 100% 42%");

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
