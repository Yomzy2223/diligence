import CMToolTip from "@/components/cmTooltip";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { propType } from "./constants";

const CMField = ({ form, name, label, tipText, type, placeholder, classNames }: propType) => {
  const [value, setvalue] = useState("");

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
          className={`flex flex-col justify-center !mt-0 relative px-6 min-h-[60px]  ${classNames?.formItem} `}
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
            <div className="flex items-center !mt-0 ">
              <Input
                type={type}
                placeholder={placeholder}
                variant="transparent"
                {...field}
                onChange={(e) => handleChange(e, field.onChange)}
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
