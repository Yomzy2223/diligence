import * as z from "zod";

export const staffSchema = z.object({
  email: z
    .string({ required_error: "Enter staff email" })
    .email("Enter a valid email")
    .nonempty("Branch admin email is required"),
});

export type staffType = z.infer<typeof staffSchema>;

export interface propType {
  children?: string | undefined;
  className?: string;
  // size?: string;
}
