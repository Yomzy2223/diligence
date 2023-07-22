import * as z from "zod";

export const corporateSearchSchema = z.object({
  regName: z.string().nonempty("Registration name is required"),
  // regNumber: z.number({ required_error: "Registration number is required" }),
  regNumber: z
    .string()
    .refine((val) => !isNaN(+val), {
      message: "Registration number must be a valid number",
      path: ["regNumber"],
    })
    .transform((val) => +val),
});

// export type corpSearchType = z.infer<typeof corporateSearchSchema>;
export type corpSearchType = {
  regName: string;
  regNumber: number | string;
};

export interface propType {
  form: any;
  name: string;
  label?: string;
  tipText?: string;
  type?: string;
  placeholder?: string;
  classNames?: {
    formItem?: string;
    formItemT?: string;
    formItemTL?: string;
    formLabel?: string;
    toolTipTr?: string;
    toolTipCo?: string;
    formMessage?: string;
    input?: string;
  };
}
