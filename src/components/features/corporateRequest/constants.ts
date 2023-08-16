import * as z from "zod";

export const corporateSearchSchema = z.object({
  name: z
    .string()
    .nonempty("Enter business/company name")
    .refine((name) => name.trim() !== "", {
      message: "Enter business/company name",
    }),
  registrationNumber: z
    .string()
    .nonempty("Enter registration number")
    .refine((regNum) => regNum.trim() !== "", {
      message: "Enter registration number",
    }),
});

export type corpSearchType = z.infer<typeof corporateSearchSchema>;
// export type corpSearchType = {
//   name: string;
//   registrationNumber: string;
// };

export interface submitType extends corpSearchType {
  email: string;
  enterpriseId: string;
}

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
    formLabel?: string;
    toolTipTr?: string;
    toolTipCo?: string;
    formMessage?: string;
    input?: string;
  };
}

// registrationNumber: z
//     .string()
//     .refine((val) => !isNaN(+val) && val !== "", {
//       message: "Registration number is required",
//     })
//     .transform((val) => +val),
