import { Dialog } from "@/components/customdialog";
import { AddOrEditBankForm } from "./Form";

type addEditBankProps = {
	triggerText: string;
	variant: "add" | "edit";
} & ({ variant: "edit"; bankname: string } | { variant: "add" });

export const AddOrEditBank = (props: addEditBankProps) => {
	return (
		<Dialog
			dialogType="normal"
			triggerText={props.triggerText}
			footer={false}
			title={props.variant === "edit" ? props.bankname : "Add new bank"}
			titleVariant={{ center: true }}
		>
			<AddOrEditBankForm isAdd={props.variant === "add"} />
		</Dialog>
	);
};
