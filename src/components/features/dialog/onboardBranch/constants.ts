import * as z from "zod";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export const bankBranchSchema = z.object({
  name: z.string().nonempty("Branch name is required"),
  location: z.string().nonempty("Branch state is required"),
  managerEmail: z.string().email("Enter a valid email").nonempty("Branch admin email is required"),
});

export type bankBranchType = z.infer<typeof bankBranchSchema>;

export interface propType {
  buttonVariant?: VariantProps<typeof buttonVariants>;
  children?: string | undefined;
  // size?: string;
}
