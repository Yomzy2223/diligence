"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputWithLabel from "@/components/input/inputWithLabel";
import { forgotPasswordSchema, forgotPasswordType } from "./constants";
import { useAuth } from "@/hooks/useAuth";

const ForgotPassword = () => {
  const { changePassword, changePasswordMutation } = useAuth();
  const { isLoading } = changePasswordMutation;

  // Form definition
  const form = useForm<forgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Submit handler
  function onSubmit(values: forgotPasswordType) {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) userInfo = JSON.parse(userInfo);
    const payload = { password: values.password, email: userInfo?.data?.email, token: "" };
    changePassword(payload);
  }

  return (
    <Form {...form}>
      <h2 className="mb-6 text-2xl">New password</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-16  ">
        <div className="flex flex-col gap-6 space-y-8 py-2 bg-white rounded-lg ">
          <InputWithLabel
            form={form}
            name="password"
            label="New password"
            placeholder="Enter new password"
            tipText="Must be at least 6 characters"
            type="password"
          />
          <InputWithLabel
            form={form}
            name="confirmPassword"
            label="Confirm new password"
            placeholder="Confirm new password"
            tipText="Should match with your new password"
            type="password"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button type="submit" size="full" loading={isLoading}>
            Reset password
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPassword;
