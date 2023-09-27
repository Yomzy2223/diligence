import { AuthLayout } from "@/layouts/AuthLayout";
import { getServerSession } from "@/lib/getServerSession";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  if (session) redirect("/");

  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
