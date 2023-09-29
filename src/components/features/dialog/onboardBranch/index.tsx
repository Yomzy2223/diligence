"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bankBranchSchema, bankBranchType, propType } from "./constants";
import InputWithLabel from "@/components/input/inputWithLabel";
import { useEnterpriseBranch } from "@/hooks/useEnterprise";
import { useSession } from "next-auth/react";
import OnboardMobile from "./OnboardMobile";
import OnboardDesktop from "./OnboardDesktop";

const BranchOnboard = ({
  children,
  variant = "default",
  size = "default",
  className,
  managerId,
  branch,
  mobile,
}: propType) => {
  const { createBranchMutation, updateBranchMutation } = useEnterpriseBranch();
  const { mutate, isLoading, isSuccess, isError } = createBranchMutation;
  const manager = branch?.data?.data?.data;

  return (
    <>
      {mobile ? (
        <OnboardMobile
          mutate={mutate}
          updateBranchMutation={updateBranchMutation}
          isLoading={isLoading}
          manager={manager}
          managerIdToUpdate={managerId}
        />
      ) : (
        <OnboardDesktop
          shouldClose={
            isSuccess || isError || updateBranchMutation.isError || updateBranchMutation.isSuccess
          }
          managerIdToUpdate={managerId}
          variant={variant}
          size={size}
          className={className}
          mutate={mutate}
          updateBranchMutation={updateBranchMutation}
          isLoading={isLoading}
          manager={manager}
        >
          {children}
        </OnboardDesktop>
      )}
    </>
  );
};

export default BranchOnboard;
