import {
	Dialog as DialogRoot,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export interface IdialogProps {
	open?: boolean;
	showCloseButton?: boolean;
	title: string;
	description?: string;
	cancel?: () => void;
	action: () => void;
	children?: ReactNode;
	actionText?: string;
	brandColor?: string;
	triggerText?: string;
}

export const Dialog = ({
	open,
	showCloseButton = false,
	title,
	description,
	cancel,
	action,
	children,
	actionText = "Save changes",
	brandColor,
	triggerText,
}: IdialogProps) => {
	return (
		<>
			{open === undefined && cancel === undefined ? (
				<DialogRoot>
					<DialogTrigger>
						<Button color={brandColor}>{triggerText}</Button>
					</DialogTrigger>
					<DialogContent
						className="sm:max-w-[554px] p-6"
						showClose={showCloseButton}
					>
						<DialogHeader className="space-y-[24px] mb-4">
							<DialogTitle className="text-2xl leading-[1.3] text-foreground-dark">
								{title}
							</DialogTitle>
							<DialogDescription className="text-lg leading-[1.3]">
								{description}
							</DialogDescription>
						</DialogHeader>
						{children}
						<DialogFooter className="mt-8">
							<DialogClose>
								<Button
									type="submit"
									color={brandColor}
									onClick={action}
								>
									{actionText}
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</DialogRoot>
			) : (
				<DialogRoot open={open}>
					<DialogContent
						className="sm:max-w-[554px] p-6"
						showClose={showCloseButton}
						cancel={cancel}
					>
						<DialogHeader className="space-y-[24px] mb-4">
							<DialogTitle className="text-2xl leading-[1.3]">
								{title}
							</DialogTitle>
							<DialogDescription className="text-lg leading-[1.3]">
								{description}
							</DialogDescription>
						</DialogHeader>
						{children}
						<DialogFooter className="mt-8">
							<DialogClose>
								<Button
									type="submit"
									color={brandColor}
									onClick={() => {
										action();
										cancel && cancel();
									}}
								>
									{actionText}
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</DialogRoot>
			)}
		</>
	);
};
