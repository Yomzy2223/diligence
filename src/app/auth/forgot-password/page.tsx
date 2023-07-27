"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputWithLabel from "@/components/input/inputWithLabel";
import Link from "next/link";
import { forgotPasswordSchema, forgotPasswordType } from "./constants";

const ForgotPassword = () => {
  // Form definition
  const form = useForm<forgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Submit handler
  function onSubmit(values: forgotPasswordType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <h1 className=" text-2xl mb-3 ">Forgot password?</h1>
      <p className="tex-sm text-cm-black-500 mb-6">
        Enter your work email to reset your password
      </p>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-16  "
      >
        <div className="flex flex-col gap-6 space-y-8 py-2 bg-white rounded-lg ">
          <InputWithLabel
            form={form}
            name="email"
            label="Work email"
            placeholder="Enter your work email"
            type="email"
            tipText="The email of the accout to be reset"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button type="submit" variant="primary" size="full">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPassword;
