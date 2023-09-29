"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { staffSchema, staffType, propType } from "./constants";
import { useEnterpriseStaff } from "@/hooks/useEnterprise";
import { useSession } from "next-auth/react";
import AddStaffDesktop from "./AddStaffDesktop";
import AddStaffMobile from "./AddStaffMobile";

const AddStaff = ({ children, className, mobile }: propType) => {
  const { createStaffMutation } = useEnterpriseStaff();
  const { mutate, isLoading } = createStaffMutation;

  const session = useSession();

  // Form definition
  const form = useForm<staffType>({
    resolver: zodResolver(staffSchema),
    defaultValues: {
      email: "",
    },
  });

  // Submit handler
  const onSubmit = (values: staffType) => {
    const payload = {
      managerId: session?.data?.user.id || "",
      formInfo: { email: values.email },
    };
    mutate(payload);
  };

  return (
    <>
      {mobile ? (
        <AddStaffMobile form={form} onSubmit={onSubmit} isLoading={isLoading} />
      ) : (
        <AddStaffDesktop
          className={className}
          form={form}
          onSubmit={onSubmit}
          isLoading={isLoading}
        >
          {children}
        </AddStaffDesktop>
      )}
    </>
  );
};

export default AddStaff;
