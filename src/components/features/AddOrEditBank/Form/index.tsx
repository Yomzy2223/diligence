"use client";

import { useState, useEffect, useCallback } from "react";
import { z } from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BankType } from "../index";
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
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

export const AddOrEditBankForm = ({
	isAdd,
	banks,
	details,
}: {
	isAdd: boolean;
	banks: BankType[];
	details?:
		| {
				adminName: string;
				adminEmail: string;
		  }
		| false;
}) => {
	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			adminEmail: "",
			adminName: "",
			bank: "",
		},
	});

	const setForm = useCallback(() => {
		if (banks.length > 0 && details) {
			form.setValue("bank", banks[0].name.toLowerCase());
			form.setValue("adminName", details.adminName);
			form.setValue("adminEmail", details.adminEmail);
		}
	}, [banks, form, details]);

	useEffect(() => {
		if (!isAdd) {
			setForm();
		}
	}, [isAdd, setForm]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="bank"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Bank name</FormLabel>
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant="outline"
											role="combobox"
											className={cn(
												"w-full justify-between px-6 py-4 font-normal",
												!field.value &&
													"text-muted-foreground"
											)}
											disabled={!isAdd}
										>
											{field.value
												? banks.find(
														(bank) =>
															bank.name.toLowerCase() ===
															field.value
												  )?.name
												: "Enter bank name"}
											<ChevronDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="p-0 w-[430px]">
									<Command>
										<CommandInput placeholder="Search bank..." />
										<CommandEmpty>
											No bank found.
										</CommandEmpty>
										<CommandGroup className="max-h-[400px] h-fit overflow-auto">
											{banks.map((bank) => (
												<CommandItem
													value={bank.name}
													key={bank.name}
													onSelect={(value) => {
														form.setValue(
															"bank",
															value
														);
														setOpen(false);
													}}
												>
													<Check
														className={cn(
															"mr-2 h-4 w-4",
															bank.name.toLowerCase() ===
																field.value
																? "opacity-100"
																: "opacity-0"
														)}
													/>
													{bank.name}
												</CommandItem>
											))}
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>
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
									className="px-6 py-4"
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
									className="px-6 py-4"
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
