"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputWithLabel from "@/components/input/inputWithLabel";
import Link from "next/link";
import { loginSchema, loginType } from "./constants";
import { Oval } from "react-loading-icons";
import { signIn } from "next-auth/react";
import { useResponse } from "@/hooks/useResponse";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { handleError, handleSuccess } = useResponse();
  const router = useRouter();

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
    // mutate(values);
    setLoading(true);
    const response = await signIn("signin", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (response?.error) {
      setLoading(false);
      handleError({ title: "Login failed", error: response.error });
    }

    if (response?.ok && !response.error) {
      setLoading(false);
      handleSuccess({ data: response, title: "Login successful" });
      router.push("/");
    }
  };

  return (
    <Form {...form}>
      <h1 className="mb-6 text-2xl">Login</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-16 ">
        <div className="flex flex-col gap-6 py-2 space-y-8 bg-white rounded-lg ">
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
          <Button type="submit" size="full" variant="secondary" disabled={loading}>
            {loading ? <Oval stroke="#fff" className="w-5 h-5" /> : "Login"}
          </Button>
          <p>
            Don&#39;t have an account?{" "}
            <Link href="/auth/signup" className="text-secondary">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default Login;
