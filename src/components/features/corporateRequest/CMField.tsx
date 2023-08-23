import CMSelect from "@/components/cmSelect";
import CMToolTip from "@/components/cmTooltip";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsInfoCircle } from "react-icons/bs";
import { propType, registrationTypes } from "./constants";

const CMField = ({
  form,
  name,
  label,
  tipText,
  type,
  placeholder,
  classNames,
  defaultValue,
  isRegNo,
}: propType) => {
  const { setValue, getValues } = useFormContext();

  const value = getValues()?.[name];

  useEffect(() => {
    if (defaultValue) setValue(name, defaultValue, { shouldValidate: true });
    else {
      setValue(name, "", { shouldValidate: false });
    }
  }, [defaultValue]);

  const handleRegTypeSelect = (selected: string) => {
    setValue("registrationType", selected);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-col justify-center !mt-0  px-6 relative min-h-[60px] ${classNames?.formItem} `}
        >
          {value && (
            <div className="flex justify-between items-center">
              <div
                className={`flex justify-start align-middle gap-2 text-xs ${classNames?.formItemT} `}
              >
                <FormLabel
                  className={`text-xs leading-3 font-normal text-foreground-label ${classNames?.formLabel} `}
                >
                  {label}
                </FormLabel>
                {tipText && <Tooltip tipText={tipText} />}
              </div>
              <FormMessage
                className={`min-w-max text-xs leading-3 font-normal ${classNames?.formMessage} `}
              />
            </div>
          )}
          <FormControl>
            <div className="flex items-center gap-1 !mt-0 ">
              {isRegNo && (
                <CMSelect
                  placeholder="Select type"
                  options={registrationTypes}
                  handleSelect={handleRegTypeSelect}
                  className={{
                    trigger: "justify-start border-none p-0 gap-1 w-max focus:ring-0",
                  }}
                />
              )}
              <Input
                type={type}
                placeholder={placeholder}
                variant="transparent"
                {...field}
                className={classNames?.input}
              />
              {!value && (
                <div className="flex items-center gap-1 text-xs ">
                  <FormMessage
                    className={`min-w-max text-xs leading-3 font-normal ${classNames?.formMessage} `}
                  />
                  {tipText && <Tooltip tipText={tipText} />}
                </div>
              )}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CMField;

const Tooltip = ({ tipText }: { tipText: string }) => (
  <CMToolTip
    content={<p className={`text-xs text-muted-foreground `}>{tipText}</p>}
    trigger={<BsInfoCircle className={`relative text-muted-foreground`} />}
  />
);
