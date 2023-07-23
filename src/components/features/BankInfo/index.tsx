import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn, convertToOneSignificantFigure } from "@/lib/utils";
import numeral from "numeral";
import { ArrowUp } from "@/assets/icons";

type BankInfoProps = {
	image: string;
	name: string;
	numberOfOnboardedBranches: number;
	numberOfBusinesssVerified: number;
	totalAmountSpent: number;
	branch: boolean;
	branchAdminName: string;
	branchAdminEmail: string;
} & ({} | {});

export const BankInfo = ({
	image,
	name,
	numberOfOnboardedBranches,
	numberOfBusinesssVerified,
	totalAmountSpent,
}: BankInfoProps) => {
	return (
		<div className="flex gap-6">
			<div className="relative w-[200px] h-[200px] rounded-sm overflow-hidden">
				<Image src={image} alt={`${name}-image`} fill />
			</div>
			<div className="flex flex-1 gap-6 p-6 border rounded">
				<TheBox>
					<p className="text-sm leading-4">ONBOARDED BRANCHES</p>
					<p className="text-3xl font-semibold leading-10 text-foreground-dark">
						{numberOfOnboardedBranches}
					</p>
					<Link
						href={"#boarded"}
						className={cn(
							buttonVariants({
								variant: "link",
								size: "slim",
							}),
							"text-foreground text-sm leading-4 flex items-center h-5"
						)}
					>
						See list <ChevronRight height={18} width={18} />
					</Link>
				</TheBox>
				<RealBox
					title="BUSINESSES VERIFIED"
					number={`${numeral(
						convertToOneSignificantFigure(numberOfBusinesssVerified)
					).format("0,0")}+`}
					percentThisMonth={25}
				/>
				<RealBox
					title="AMOUNT SPENT"
					number={`#${numeral(
						convertToOneSignificantFigure(totalAmountSpent)
					).format("0,0")}+`}
					percentThisMonth={25}
				/>
			</div>
		</div>
	);
};

const TheBox = ({ children }: { children: ReactNode }) => (
	<div className="p-6 pr-10 border rounded max-w-[264px] w-full flex flex-col justify-between">
		{children}
	</div>
);

const RealBox = ({
	title,
	number,
	percentThisMonth,
}: {
	title: string;
	number: string;
	percentThisMonth: number;
}) => {
	return (
		<TheBox>
			<p className="text-sm leading-4">{title}</p>
			<p className="text-3xl font-semibold leading-10 text-foreground-dark">
				{number}
			</p>
			<div className="flex items-center gap-2">
				<div className="flex items-center h-6 gap-1 px-1 rounded bg-grey">
					<p className="text-xs leading-4">{percentThisMonth}%</p>{" "}
					<ArrowUp />
				</div>
				<p className="text-sm leading-5">This month</p>
			</div>
		</TheBox>
	);
};
