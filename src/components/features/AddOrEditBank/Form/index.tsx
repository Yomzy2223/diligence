"use client";

import { z } from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const AddOrEditBankForm = ({ isAdd }: { isAdd: boolean }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			adminEmail: "",
			adminName: "",
			bankName: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="bankName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bank name</FormLabel>
							<FormControl>
								<Select>
									<SelectTrigger className="">
										<SelectValue placeholder="Pick a Bank" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">
											Light
										</SelectItem>
										<SelectItem value="dark">
											Dark
										</SelectItem>
										<SelectItem value="system">
											System
										</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="adminName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Account admin name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter admin name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="adminEmail"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Account admin email</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter admin email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					{isAdd ? "Add" : "Done"}
				</Button>
			</form>
		</Form>
	);
};
