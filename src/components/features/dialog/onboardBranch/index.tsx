"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bankBranchSchema, bankBranchType, propType } from "./constants";
import InputWithLabel from "@/components/input/inputWithLabel";
import { useMutation, useQuery } from "@tanstack/react-query";
import { viewEnterpriseByEmail } from "@/api/bankApi";
import { Variable } from "lucide-react";
import { useBank } from "@/hooks/useBank";

const BranchOnboard = ({ buttonVariant, children }: propType) => {
  const adminEmail = "femiadeyemo008@gmail.com";
  const enterprise = useQuery(["viewEnterpriseByEmail", adminEmail], () =>
    viewEnterpriseByEmail(adminEmail)
  );
  const enterpriseData = enterprise?.data?.data?.data;
  const adminId = enterpriseData?.id;

  const { useCreateDiligenceManagerMutation } = useBank();
  const createDiligenceManager = useCreateDiligenceManagerMutation();

  // Form definition
  const form = useForm<bankBranchType>({
    resolver: zodResolver(bankBranchSchema),
    defaultValues: {
      name: "",
      location: "",
      managerEmail: "",
    },
  });

  // Submit handler
  function onSubmit(formInfo: bankBranchType) {
    createDiligenceManager.mutate(
      { adminId, formInfo },
      {
        onSuccess: (data) => {
          console.log(data);
        },
      }
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={buttonVariant?.size} variant={buttonVariant?.variant}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[570px] py-14 bg-white ">
        <DialogHeader className="m-auto mb-6 ">
          <DialogTitle>Onboard a Branch</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-16 w-[90%] m-auto "
          >
            <div className="flex flex-col gap-6 py-2 space-y-8 bg-white rounded-lg ">
              <InputWithLabel
                form={form}
                name="name"
                label="Branch Name"
                placeholder="Enter branch name"
                tipText="Must be the registrered name"
                textSize="text-xs"
              />
              <InputWithLabel
                form={form}
                name="location"
                label="Branch State"
                placeholder="Enter branch state"
                tipText="The state where the branch is located"
                textSize="text-xs"
              />
              <InputWithLabel
                form={form}
                name="managerEmail"
                label="Branch Manager Email"
                placeholder="Enter branch manager email"
                tipText="Mailing list email is not supported"
                textSize="text-xs"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Button type="submit" variant="secondary" size="full">
                Onboard
              </Button>
              <DialogClose
                className={buttonVariants({
                  size: "full",
                  variant: "transparent",
                })}
              >
                Cancel
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BranchOnboard;
