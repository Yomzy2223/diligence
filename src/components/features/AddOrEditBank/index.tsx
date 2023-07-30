import { Dialog } from "@/components/customdialog";
import { AddOrEditBankForm } from "./Form";

export type BankType = {
	name: string;
	id: string;
};

type addEditBankProps = {
	triggerText: string;
	variant: "add" | "edit";
} & (
	| {
			variant: "edit";
			bankname: string;
			adminName: string;
			adminEmail: string;
	  }
	| { variant: "add"; banks: BankType[] }
);

export const AddOrEditBank = (props: addEditBankProps) => {
	return (
		<Dialog
			dialogType="normal"
			triggerText={props.triggerText}
			footer={false}
			title={props.variant === "edit" ? props.bankname : "Add new bank"}
		>
			<AddOrEditBankForm
				isAdd={props.variant === "add"}
				banks={
					props.variant === "add"
						? props.banks
						: [{ name: props.bankname, id: "1" }]
				}
				details={
					props.variant === "edit" && {
						adminName: props.adminName,
						adminEmail: props.adminEmail,
					}
				}
			/>
		</Dialog>
	);
};
