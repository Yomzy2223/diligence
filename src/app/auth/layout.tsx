import { AuthLayout } from "@/components/features/AuthLayout";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default layout;
