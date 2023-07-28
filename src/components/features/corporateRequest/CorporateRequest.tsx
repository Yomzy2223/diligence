"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { corporateSearchSchema, corpSearchType } from "./constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CMField from "./CMField";
import { cn } from "@/lib/utils";

const CorporateRequest = ({ className }: { className?: string }) => {
  // Form definition
  const form = useForm<corpSearchType>({
    resolver: zodResolver(corporateSearchSchema),
    defaultValues: {
      regName: "",
      regNumber: "",
    },
  });

  // Submit handler
  function onSubmit(values: corpSearchType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const styles2 = {
    formItemT: "pt-2",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-[url('../assets/images/corp-search-background.svg')] bg-no-repeat bg-cover w-full rounded-lg py-6 ",
        className
      )}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-4/6 ">
          <p className="text-white font-normal text-3xl w-max pb-5 ">Request Corporate Search</p>
          <div className="flex flex-col space-y-8 py-2 bg-white rounded-lg ">
            <CMField
              form={form}
              name="regName"
              label="Business/Company Name"
              placeholder="Enter Business/Company Name"
              tipText="Must be registered with CAC"
            />

            <Separator className="!mt-0 " />

            <CMField
              form={form}
              name="regNumber"
              label="Registration Number"
              placeholder="Enter Registration Number"
              classNames={styles2}
              tipText="Unique registration number assigned to your business when you registered"
              type="number"
            />
          </div>
          <Button type="submit" className="self-end " variant="secondary">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CorporateRequest;
