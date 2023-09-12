import * as z from "zod";

export const forgotPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be 6 or more characters")
      .nonempty("Enter new password"),
    confirmPassword: z.string().nonempty("Confirm new password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type forgotPasswordType = z.infer<typeof forgotPasswordSchema>;
