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
import { propType } from "./constants";

const CMField = ({
  form,
  name,
  label,
  tipText,
  type,
  placeholder,
  classNames,
}: propType) => {
  const [value, setvalue] = useState("");

  const handleChange = (e: any, onChange: (e: any[]) => void) => {
    const val = e.target.value;
    setvalue(val);
    onChange(e);
  };

  const Tooltip = (
    <CMToolTip
      content={
        <p className={`text-xs text-cm-black-400 ${classNames?.toolTipCo} `}>
          {tipText}
        </p>
      }
      trigger={
        <BsInfoCircle
          className={`relative text-cm-black-400 ${classNames?.toolTipTr} `}
        />
      }
    />
  );

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-col justify-center !mt-0  ${classNames?.formItem} `}
        >
          <div className="flex content-between gap-4 mb-2">
            <div
              className={`flex justify-start align-middle gap-2 text-xs ${classNames?.formItemT} `}
            >
              <FormLabel
                className={`text-xs leading-3 font-normal text-cm-black-500 ${classNames?.formLabel} `}
              >
                {label}
              </FormLabel>
              {Tooltip}
            </div>
            <FormMessage
              className={`min-w-max text-xs leading-3 font-normal ${classNames?.formMessage} `}
            />
          </div>
          <FormControl>
            <div className="flex items-center !mt-0 ">
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                onChange={(e) => handleChange(e, field.onChange)}
                className={cn("placeholder:text-xs", classNames?.input)}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CMField;
