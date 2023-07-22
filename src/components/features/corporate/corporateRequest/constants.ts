import * as z from "zod";

export const corporateSearchSchema = z.object({
  regName: z.string().nonempty("Registration name is required"),
  regNumber: z.number({ required_error: "Registration number is required" }),
});

export type corpSearchType = z.infer<typeof corporateSearchSchema>;

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
