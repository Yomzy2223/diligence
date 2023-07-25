"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bankBranchSchema, bankBranchType } from "./constants";
import CMField from "./CMField";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface propType {
  buttonVariant?: "default";
  children?: string;
}

const BranchOnboard = ({ buttonVariant, children }: propType) => {
  // Form definition
  const form = useForm<bankBranchType>({
    resolver: zodResolver(bankBranchSchema),
    defaultValues: {
      branch: "",
      branchState: "",
      managerEmail: "",
    },
  });

  // Submit handler
  function onSubmit(values: bankBranchType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[570px] py-14 ">
        <DialogHeader className="m-auto mb-6 ">
          <DialogTitle>Onboard a Branch</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-16 w-[90%] m-auto "
          >
            <div className="flex flex-col gap-6 space-y-8 py-2 bg-white rounded-lg ">
              <CMField
                form={form}
                name="branch"
                label="Branch Name"
                placeholder="Enter branch name"
                tipText="Must be the registrered name"
              />
              <CMField
                form={form}
                name="branchState"
                label="Branch State"
                placeholder="Enter branch state"
                tipText="The state where the branch is located"
              />
              <CMField
                form={form}
                name="managerEmail"
                label="Branch Manager Email"
                placeholder="Enter branch manager email"
                tipText="Mailing list email is not supported"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Button type="submit" size="full">
                Onboard
              </Button>
              <DialogPrimitive.Close
                className={buttonVariants({
                  size: "full",
                  variant: "transparent",
                })}
              >
                Cancel
              </DialogPrimitive.Close>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BranchOnboard;
