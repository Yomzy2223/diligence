"use client";

import CMToolTip from "@/components/cmTooltip";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsInfoCircle } from "react-icons/bs";
import { cmFieldPropType } from "./constants";

const CMField = ({
  form,
  name,
  label,
  tipText,
  type,
  placeholder,
}: cmFieldPropType) => {
  const Tooltip = (
    <CMToolTip
      content={<p className={`text-xs text-cm-black-400`}>{tipText}</p>}
      trigger={<BsInfoCircle className={`relative text-cm-black-400 `} />}
    />
  );

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col justify-center !mt-0 `}>
          <div className="flex justify-between gap-4 mb-2 w-full">
            <div className={`flex justify-start align-middle gap-2 text-xs `}>
              <FormLabel
                className={`text-xs leading-3 font-normal text-cm-black-500 `}
              >
                {label}
              </FormLabel>
              {Tooltip}
            </div>
            <FormMessage
              className={`min-w-max text-xs leading-3 font-normal  `}
            />
          </div>
          <FormControl>
            <div className="flex items-center !mt-0 ">
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                className={cn("placeholder:text-xs")}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CMField;
