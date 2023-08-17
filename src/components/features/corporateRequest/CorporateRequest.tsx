"use client";

import React, { useContext, useEffect, useState } from "react";
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
import { RequestContext } from "@/app/(dashboard)/(home)/layout";

const CorporateRequest = ({ className }: { className?: string }) => {
  const { createRequestMutation, updateRequestMutation } = useRequests();
  const { mutate, isLoading, isSuccess, isError } = createRequestMutation;
  const [formValues, setFormValues] = useState({ name: "", registrationNumber: "" });
  const [openConfirm, setOpenConfirm] = useState(false);

  const requestContext = useContext(RequestContext);
  const editMode = requestContext?.regInfo?.regName && requestContext?.regInfo?.regNo;

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
    console.log(values);
    setFormValues(values);
    setOpenConfirm(true);
  };

  // Create or Update request
  const handleConfirm = () => {
    const userInfo = getUserInfo();
    const payload: submitType = {
      ...formValues,
      email: userInfo?.data?.email || "",
      enterpriseId: userInfo?.data?.enterpriseId || "",
    };

    editMode
      ? updateRequestMutation?.mutate({
          requestId: requestContext?.regInfo?.requestId,
          formInfo: payload,
        })
      : mutate(payload);
  };

  // Cancel request update
  const cancelEdit = () => {
    requestContext?.setRegInfo({
      ...requestContext?.regInfo,
      regName: "",
      regNo: "",
    });
  };

  useEffect(() => {
    if (
      editMode
        ? updateRequestMutation.isError || updateRequestMutation.isSuccess
        : isSuccess || isError
    )
      setOpenConfirm(false);
    if (updateRequestMutation.isSuccess) cancelEdit();
  }, [isLoading, updateRequestMutation.isLoading]);

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
          <div className="flex flex-col space-y-8 py-2 bg-white rounded-lg relative ">
            <CMField
              form={form}
              name="name"
              label="Business/Company Name"
              placeholder="Enter Business/Company Name"
              tipText="Must be registered with CAC"
              defaultValue={requestContext?.regInfo?.regName}
            />

            <Separator className="!mt-0 " />

            <CMField
              form={form}
              name="registrationNumber"
              label="Registration Number"
              placeholder="Enter Registration Number"
              tipText="Unique registration number assigned to your business when you registered"
              type="text"
              defaultValue={requestContext?.regInfo?.regNo}
            />
          </div>

          <div className="self-end space-x-4">
            {editMode && (
              <Button
                type="button"
                variant="outline-secondary"
                loading={isLoading}
                onClick={cancelEdit}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" variant="secondary" loading={isLoading}>
              {editMode ? "Update" : "Submit"}
            </Button>
          </div>

          <ConfirmAction
            open={openConfirm}
            setOpen={setOpenConfirm}
            title="Confirm Request Information"
            description={`Business name is "${formValues.name}" and Registration Number is "${formValues.registrationNumber}"`}
            actionText="Request"
            action={handleConfirm}
            loading={isLoading || updateRequestMutation.isLoading}
          />
        </form>
        {/* {mutation.status === "loading" && <p>Loading...</p>}
      {mutation.status === "error" && <p>Error creating request</p>} */}
      </Form>
    </div>
  );
};

export default CorporateRequest;
