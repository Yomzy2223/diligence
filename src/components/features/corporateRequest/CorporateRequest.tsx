"use client";

import React, { useEffect} from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { corporateSearchSchema, corpSearchType } from "./constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CMField from "./CMField";
import { cn } from "@/lib/utils";
import { createRequest} from "@/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/features/Toast/index";

const CorporateRequest = ({ className }: { className?: string }) => {

  // Form definition
  const form = useForm<corpSearchType>({
    resolver: zodResolver(corporateSearchSchema),
    defaultValues: {
      regName: "",
      regNumber: "",
    },
  });

  const queryClient = useQueryClient(); 
  const { mutate } = useMutation(createRequest, { 
    onSuccess: (data) => {
      // console.log(data)
      queryClient.invalidateQueries(["viewEnterpriseByEmail"])

    },
    onError: (error) => {
      // console.log("error", error)  
    }
  });
  
  const onSubmit = async (values: corpSearchType) => {
    try {
      const payload = {
        name:`${values.regName}`, 
        registrationNumber: `${values.regNumber}`, 
        email:"bamidelesayo1@sidebrief.com", 
        enterpriseId: "a46bccb1-f23e-4f2b-a93a-fa66428f778d"
      }
      mutate(payload)
    } catch (error) {
      console.log("error", error)
    }
    
   
  };
  const styles2 = {
    formItemT: "pt-2",
  };

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
        {/* {mutation.status === "loading" && <p>Loading...</p>}
      {mutation.status === "error" && <p>Error creating request</p>} */}
      </Form>
    </div>
  );
};

export default CorporateRequest;
