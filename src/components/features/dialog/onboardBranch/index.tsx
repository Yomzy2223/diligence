"use client";

import React, { useEffect, useState } from "react";
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
import { getUserInfo } from "@/lib/globalFunctions";
import { useBankBranch } from "@/hooks/useEnterprise";

const BranchOnboard = ({ buttonVariant, children }: propType) => {
  const [open, setOpen] = useState(false);

  const { createBranchMutation } = useBankBranch();
  const { mutate, isLoading, isSuccess, isError } = createBranchMutation;

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
  function onSubmit(values: bankBranchType) {
    const payload = {
      adminId: getUserInfo()?.data?.id,
      formInfo: values,
    };
    mutate(payload);
  }

  useEffect(() => {
    if (isSuccess || isError) setOpen(false);
  }, [isLoading]);

  return (
    <Dialog open={open}>
      <Button variant={buttonVariant} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <DialogContent
        className="sm:max-w-[425px] md:max-w-[570px] py-14 bg-white "
        cancel={() => setOpen(false)}
      >
        <DialogHeader className="m-auto mb-6 ">
          <DialogTitle>Onboard a Branch</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-16 w-[90%] m-auto "
          >
            <div className="flex flex-col gap-6 space-y-8 py-2 bg-white rounded-lg ">
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
              <Button type="submit" variant="secondary" size="full" loading={isLoading}>
                Onboard
              </Button>
              <Button size="full" variant="transparent" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BranchOnboard;
