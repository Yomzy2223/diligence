import * as z from "zod";

export const corporateSearchSchema = z.object({
  name: z
    .string({ required_error: "Enter business/company name" })
    .nonempty("Enter business/company name")
    .refine((name) => name.trim() !== "", {
      message: "Enter business/company name",
    }),
  registrationType: z
    .string({ required_error: "Select registraion type" })
    .nonempty("Select registraion type"),
  registrationNumber: z
    .string({ required_error: "Enter registration number" })
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

export interface submitType {
  name: string;
  registrationNumber: string;
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
  defaultValue?: string;
  isRegNo?: boolean;
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
export const registrationTypes = [
  "RC", // Registered Company
  "LLC", // Limited Liability Company
  "LP", // Limited Partnership
  "LLP", // Limited Liability Partnership
  "SP", // Sole Proprietorship
  "PLC", // Public Limited Company
  "NPO", // Nonprofit Organization
  "Co-op", // Cooperative
  "PC", // Professional Corporation
  "JV", // Joint Venture
];
// registrationNumber: z
//     .string()
//     .refine((val) => !isNaN(+val) && val !== "", {
//       message: "Registration number is required",
//     })
//     .transform((val) => +val),
