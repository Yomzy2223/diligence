import { AuthLayout } from "@/layouts/AuthLayout";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default layout;
