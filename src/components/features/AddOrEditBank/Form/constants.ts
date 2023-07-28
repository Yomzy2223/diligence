import * as z from "zod";

export const formSchema = z.object({
	bankName: z.string().nonempty("This field is required"),
	adminName: z.string().nonempty("This field is required"),
	adminEmail: z.string().email().nonempty("This field is required"),
});
