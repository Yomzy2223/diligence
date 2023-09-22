"use client";

import Sidebar from "@/components/features/sidebar";
import MainHeader from "@/components/header/mainHeader";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const session = useSession();
  if (session.status === "loading") return <></>;
  if (session.status === "unauthenticated") redirect("/auth/login");

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
