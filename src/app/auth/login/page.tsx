"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputWithLabel from "@/components/input/inputWithLabel";
import Link from "next/link";
import { loginSchema, loginType } from "./constants";
import { useAuth } from "@/hooks/useAuth";
import { Oval } from "react-loading-icons";

const Login = () => {
  const { signInMutation } = useAuth();
  const { mutate, isLoading } = signInMutation;

  // Form definition
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit handler
  const onSubmit = async (values: loginType) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <h1 className="mb-6 text-2xl">Login</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-16  ">
        <div className="flex flex-col gap-6 space-y-8 py-2 bg-white rounded-lg ">
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
            bottom={
              <Link href="/auth/forgot-password" className="flex self-end text-sm">
                Forgot password?
              </Link>
            }
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          <Button type="submit" size="full" variant="secondary" disabled={isLoading}>
            {isLoading ? <Oval stroke="#fff" className="w-5 h-5" /> : "Login"}
          </Button>
          <p>
            Don&#39;t have an account?{" "}
            <Link href="/auth/signup" className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default Login;
