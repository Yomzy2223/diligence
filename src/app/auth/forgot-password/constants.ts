import * as z from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email")
    .nonempty("Enter your email address"),
});

export type forgotPasswordType = z.infer<typeof forgotPasswordSchema>;
