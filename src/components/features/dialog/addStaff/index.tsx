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
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";

const AddStaff = ({ children }: propType) => {
  const [open, setOpen] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState({});
  const { managerId } = useGlobalFucntions();

  const { createStaffMutation, useViewAllBranchStaffQuery, deleteStaffMutation } =
    useEnterpriseStaff();
  const { mutate, isLoading, isSuccess, isError } = createStaffMutation;

  const viewBranchStaffQuery = useViewAllBranchStaffQuery(managerId);
  const allStaff = viewBranchStaffQuery.data?.data?.data;

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
      managerId: getUserInfo()?.data?.id,
      formInfo: { email: values.email },
    };
    mutate(payload);
  };

  // Refetch staff when successfully created one or deleted any
  useEffect(() => {
    if (isSuccess || deleteStaffMutation.isSuccess) viewBranchStaffQuery.refetch();
  }, [isSuccess, deleteStaffMutation.isSuccess]);

  const handleRemove = (staff: any) => {
    setStaffToDelete(staff);
    deleteStaffMutation.mutate(staff?.id);
  };

  return (
    <Dialog open={open}>
      <Button onClick={() => setOpen(true)}>{children}</Button>
      <DialogContent
        className="sm:max-w-[425px] md:max-w-[570px] py-14 bg-white gap-0"
        cancel={() => setOpen(false)}
      >
        <DialogHeader className="m-auto w-full mb-6">
          <DialogTitle>Add Staff</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-16 w-full m-auto mb-8 "
          >
            <div className="flex item-center gap-4 bg-white rounded-lg ">
              <InputWithLabel
                form={form}
                name="email"
                placeholder="Enter staff work email"
                textSize="text-xs"
                classNames={{ formItem: "w-4/5" }}
                bottom={
                  <span className="text-xs pt-2">
                    Members added are only allowed to make requests for verifications
                  </span>
                }
              />
              <Button
                type="submit"
                variant="ghost2"
                size="icon"
                loading={isLoading}
                loadingStroke="hsl(var(--primary))"
                className="relative top-5 underline px-1"
              >
                Add
              </Button>
            </div>
          </form>
        </Form>

        {allStaff?.length > 0 && (
          <div className="space-y-2 mb-12 ">
            <p className="text-sm font-semibold">List of added staff</p>
            <div className="bg-background-grey max-h-72 overflow-auto p-3.5 rounded-lg space-y-4">
              {allStaff?.map((el: any, i: number) => (
                <div key={i} className="flex justify-between gap-4">
                  <span className="text-sm">{el?.email}</span>
                  <Button
                    size="slim"
                    variant="destructive2"
                    loading={deleteStaffMutation.isLoading && staffToDelete === el}
                    onClick={() => handleRemove(el)}
                  >
                    X Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <Button type="button" onClick={() => setOpen(false)}>
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaff;
