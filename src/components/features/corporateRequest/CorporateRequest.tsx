"use client";

import React, { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { corporateSearchSchema, corpSearchType, registrationTypes, submitType } from "./constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CMField from "./CMField";
import { cn } from "@/lib/utils";
import { useRequests } from "@/hooks/useRequests";
import ConfirmAction from "../dialog/confirmAction";
import { useRequestStore } from "@/store/requestStore";
import { useSession } from "next-auth/react";

const CorporateRequest = ({ className }: { className?: string }) => {
  const { createRequestMutation, updateRequestMutation } = useRequests();
  const { mutate, isLoading, isSuccess, isError } = createRequestMutation;
  const [formValues, setFormValues] = useState({
    name: "",
    registrationType: "",
    registrationNumber: "",
  });
  const [openConfirm, setOpenConfirm] = useState(false);

  const mergedRegNo = formValues.registrationType + formValues.registrationNumber;

  const session = useSession();

  const { requestId, regNo, regName, regType, setRegName, setRegNo, setRegType } =
    useRequestStore();

  const editMode = regName && regNo;

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

  // Create or Update request
  const handleConfirm = () => {
    const userInfo = session.data?.user;
    const payload: submitType = {
      name: formValues.name,
      registrationNumber: mergedRegNo,
      email: userInfo?.email || "",
      enterpriseId: session.data?.enterprise.id || "",
    };

    editMode
      ? updateRequestMutation?.mutate({
          requestId,
          formInfo: payload,
        })
      : mutate(payload);
  };

  // Cancel request update
  const cancelEdit = () => {
    setRegName("");
    setRegNo("");
    setRegType("");
  };

  // Close dialog and refetch data after creating or updating a request
  useEffect(() => {
    if (
      editMode
        ? updateRequestMutation.isError || updateRequestMutation.isSuccess
        : isSuccess || isError
    ) {
      setOpenConfirm(false);
    }
    if (isSuccess || updateRequestMutation.isSuccess) cancelEdit();
  }, [isSuccess, isError, updateRequestMutation.isError, updateRequestMutation.isSuccess]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center corporate-background bg-no-repeat bg-cover w-full rounded-lg py-5 md:py-6",
        className
      )}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-5/6 md:w-4/6 ">
          <p className="text-white font-normal text-xl w-max max-w-full pb-5 md:text-3xl md:pb-7">
            Request corporate search
          </p>
          <div className="flex flex-col py-2 bg-white rounded-lg relative mb-4 !z-0">
            <CMField
              form={form}
              name="name"
              label="Business/Company Name"
              placeholder="Enter Business/Company Name"
              tipText="Must be registered with CAC"
              defaultValue={regName}
            />

            <Separator className="!mt-0 " />

            <CMField
              form={form}
              name="registrationNumber"
              label="Registration Number"
              placeholder="Enter Registration Number"
              tipText="Unique registration number assigned to your business when you registered"
              defaultValue={regNo}
              defaultRegType={regType}
              isRegNo
            />
          </div>

          <div className="flex flex-col-reverse gap-4 self-end w-full md:w-max md:flex-row">
            {editMode && (
              <Button
                type="button"
                variant="outline"
                className="bg-background w-full md:w-max"
                loading={isLoading}
                onClick={cancelEdit}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" loading={isLoading} className="w-full md:w-max">
              {editMode ? "Update" : "Submit"}
            </Button>
          </div>

          <ConfirmAction
            open={openConfirm}
            setOpen={setOpenConfirm}
            title="Confirm Request Information"
            description={`Business name is "${formValues.name}" and Registration Number is "${mergedRegNo}"`}
            actionText="Request"
            action={handleConfirm}
            loading={isLoading || updateRequestMutation.isLoading}
          />
        </form>
      </Form>
    </div>
  );
};

export default CorporateRequest;
