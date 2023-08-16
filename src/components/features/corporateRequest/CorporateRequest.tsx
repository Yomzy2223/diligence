"use client";

import React, { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { corporateSearchSchema, corpSearchType, submitType } from "./constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CMField from "./CMField";
import { cn } from "@/lib/utils";
import { useRequests } from "@/hooks/useRequests";
import { getUserInfo } from "@/lib/globalFunctions";
import ConfirmAction from "../dialog/confirmAction";

const CorporateRequest = ({ className }: { className?: string }) => {
  const { createRequestMutation } = useRequests();
  const { mutate, isLoading, isSuccess, isError } = createRequestMutation;
  const [formValues, setFormValues] = useState({ name: "", registrationNumber: "" });
  const [openConfirm, setOpenConfirm] = useState(false);

  // Form definition
  const form = useForm<corpSearchType>({
    resolver: zodResolver(corporateSearchSchema),
    defaultValues: {
      name: "",
      registrationNumber: "",
    },
  });

  // Submit handler
  const onSubmit = async (values: corpSearchType) => {
    setFormValues(values);
    setOpenConfirm(true);
  };

  const handleConfirm = () => {
    const userInfo = getUserInfo();
    const payload: submitType = {
      ...formValues,
      email: userInfo?.data?.email || "",
      enterpriseId: userInfo?.data?.id || "",
    };

    mutate(payload);
  };

  useEffect(() => {
    if (isSuccess || isError) setOpenConfirm(false);
  }, [isLoading]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center corporate-background bg-no-repeat bg-cover w-full rounded-lg py-6 ",
        className
      )}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-4/6 ">
          <p className="text-white font-normal text-3xl w-max pb-5 ">Request Corporate Search</p>
          <div className="flex flex-col space-y-8 py-2 bg-white rounded-lg ">
            <CMField
              form={form}
              name="name"
              label="Business/Company Name"
              placeholder="Enter Business/Company Name"
              tipText="Must be registered with CAC"
            />

            <Separator className="!mt-0 " />

            <CMField
              form={form}
              name="registrationNumber"
              label="Registration Number"
              placeholder="Enter Registration Number"
              tipText="Unique registration number assigned to your business when you registered"
              type="text"
            />
          </div>
          <Button type="submit" className="self-end " variant="secondary" loading={isLoading}>
            Submit
          </Button>
          <ConfirmAction
            open={openConfirm}
            setOpen={setOpenConfirm}
            title="Confirm Request Information"
            description={`Business name is "${formValues.name}" and Registration Number is "${formValues.registrationNumber}"`}
            actionText="Request"
            action={handleConfirm}
            loading={isLoading}
          />
        </form>
      </Form>
    </div>
  );
};

export default CorporateRequest;
