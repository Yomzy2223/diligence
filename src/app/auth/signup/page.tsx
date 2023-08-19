"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "./constants";
import InputWithLabel from "@/components/input/inputWithLabel";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { ToastAction } from "@/components/ui/toast";
import { Oval } from "react-loading-icons";

const SignUp = () => {
  const { signUpMutation } = useAuth();
  const { mutate, isLoading } = signUpMutation;

  // Form definition
  const form = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  // Submit handler
  function onSubmit(values: signUpType) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <h1 className="mb-6 text-2xl">Create account</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-16  ">
        <div className="flex flex-col gap-6 space-y-8 py-2 bg-white rounded-lg ">
          <InputWithLabel
            form={form}
            name="firstName"
            label="First name"
            placeholder="Enter your first name"
          />
          <InputWithLabel
            form={form}
            name="lastName"
            label="Last name"
            placeholder="Enter your last name"
          />
          <InputWithLabel
            form={form}
            name="email"
            label="Work email"
            placeholder="Enter your work email"
            type="email"
          />
          <InputWithLabel
            form={form}
            name="password"
            label="Password"
            placeholder="Enter password"
            tipText="Must be at least 6 characters"
            type="password"
          />
        </div>

        <div className="flex flex-col items-center gap-8">
          <Button type="submit" variant="secondary" size="full" disabled={isLoading}>
            {isLoading ? <Oval stroke="#fff" className="w-5 h-5" /> : "Create account"}
          </Button>
          <p>
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default SignUp;
