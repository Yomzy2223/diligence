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
import { staffSchema, staffType, propType } from "./constants";
import InputWithLabel from "@/components/input/inputWithLabel";
import { getUserInfo } from "@/lib/globalFunctions";
import { useEnterpriseBranch, useEnterpriseStaff } from "@/hooks/useEnterprise";

const AddStaff = ({ children }: propType) => {
  const [open, setOpen] = useState(false);

  const { createStaffMutation } = useEnterpriseStaff();
  const { mutate, isLoading, isSuccess, isError } = createStaffMutation;

  // Form definition
  const form = useForm<staffType>({
    resolver: zodResolver(staffSchema),
    defaultValues: {
      email: "",
    },
  });

  // Submit handler
  function onSubmit(values: staffType) {
    console.log(getUserInfo()?.data?.id);
    console.log(values);
    // const payload = {
    //   managerId: getUserInfo()?.data?.id,
    //   formInfo: { email: values.email },
    // };
    // mutate(payload);
  }

  useEffect(() => {
    if (isSuccess || isError) setOpen(false);
  }, [isLoading]);

  return (
    <Dialog open={open}>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        {children}
      </Button>
      <DialogContent
        className="sm:max-w-[425px] md:max-w-[570px] py-14 bg-white "
        cancel={() => setOpen(false)}
      >
        <DialogHeader className="m-auto mb-6 ">
          <DialogTitle>Add Staff</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-16 w-[90%] m-auto "
          >
            <div className="flex gap-4 py-2 bg-white rounded-lg ">
              <InputWithLabel
                form={form}
                name="email"
                placeholder="Enter staff work email"
                textSize="text-xs"
              />
              <Button type="submit" variant="ghost2" size="icon" loading={isLoading}>
                Add
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <Button type="button" variant="secondary" size="full" loading={isLoading}>
                Done
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaff;
