import * as z from "zod";

export const bankBranchSchema = z.object({
  name: z.string().nonempty("Branch name is required"),
  location: z.string().nonempty("Branch state is required"),
  managerEmail: z.string().email("Enter a valid email").nonempty("Branch admin email is required"),
});

export type bankBranchType = z.infer<typeof bankBranchSchema>;

export interface propType {
  children?: string | undefined;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline-secondary"
    | "destructive2"
    | "outline"
    | "secondary"
    | "ghost"
    | "ghost2"
    | "transparent"
    | "orangeOutline";
  size?: "link" | "default" | "full" | "sm" | "lg" | "icon" | "slim";
  className?: string;
  managerId?: string;
  branch?: any;
}
