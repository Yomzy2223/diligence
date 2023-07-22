import CMToolTip from "@/components/cmTooltip";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(name, formState);
  const err = fieldState.error?.message;

  const handleChange = (e: any, onChange: (e: any[]) => void) => {
    const val = e.target.value;
    setvalue(val);
    onChange(e);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`!mt-0 relative px-6 min-h-[60px]  ${classNames?.formItem} `}
        >
          <div
            className={`flex align-middle justify-between ${classNames?.formItemT} `}
          >
            {(err || value) && (
              <div
                className={`flex justify-start align-middle gap-2 text-xs ${classNames?.formItemTL} `}
              >
                <FormLabel
                  className={`text-xs leading-3 font-normal text-cm-black-400 ${classNames?.formLabel} `}
                >
                  {label}
                </FormLabel>
                <CMToolTip
                  content={
                    <p
                      className={`text-xs text-cm-black-400 ${classNames?.toolTipCo} `}
                    >
                      {tipText}
                    </p>
                  }
                  trigger={
                    <BsInfoCircle
                      className={`relative text-cm-black-400 ${classNames?.toolTipTr} `}
                    />
                  }
                />
              </div>
            )}
            <FormMessage
              className={` text-xs leading-3 font-normal ${classNames?.formMessage} `}
            />
          </div>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              variant="transparent"
              {...field}
              onChange={(e) => handleChange(e, field.onChange)}
              className={classNames?.input}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CMField;
