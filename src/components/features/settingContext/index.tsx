import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SettingContext = () => {
	return (
		<div className="space-y-3">
			<h6 className="text-xl font-medium leading-6 text-foreground-dark">
				Support and help
			</h6>
			<div className="flex flex-col w-full p-4 border rounded text-foreground-dark">
				<SLink href="contact">Contact support</SLink>
				<SLink href="help">Help center</SLink>
				<SLink href="troubleshoot">Troubleshoot</SLink>
			</div>
		</div>
	);
};

const SLink = ({ children, href }: { children: string; href: string }) => (
	<Link
		href={href}
		className={cn(
			buttonVariants({
				variant: "ghost",
			}),
			"justify-start"
		)}
	>
		{children}
	</Link>
);
