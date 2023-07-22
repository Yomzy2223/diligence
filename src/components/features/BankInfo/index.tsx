import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

interface BankInfoProps {
	image: any;
	name: string;
	address: string;
	adminName: string;
	adminEmail: string;
	regUrl: string;
	brandColor?: string;
	branch?: boolean;
}

export const BankInfo = ({
	image,
	name,
	address,
	adminEmail,
	adminName,
	regUrl,
	brandColor,
	branch = false,
}: BankInfoProps) => {
	return (
		<div className="space-y-4">
			<h6 className="text-xl font-semibold leading-6 text-foreground-dark">
				Bank Information
			</h6>
			<div className="flex gap-6 p-6 border divide-x rounded-sm">
				<div className="grow">
					<div className="relative w-[148px] h-[148px] rounded-sm overflow-hidden">
						<Image src={image} alt={`${name}-image`} fill />
					</div>
				</div>
				<div className="flex grow-[5] divide-x">
					<div className="flex flex-col px-6 divide-y grow">
						<Detail detailName="Bank name" detail={name} />
						<Detail
							detailName="Bank headquarters address"
							detail={address}
						/>
					</div>
					<div className="flex flex-col px-6 divide-y grow">
						<Detail
							detailName="Account admin name"
							detail={adminName}
						/>
						<Detail
							detailName="Account admin email"
							detail={adminEmail}
						/>
					</div>
				</div>
				<div className="flex justify-end grow">
					<div className="flex flex-col items-start">
						{!branch && (
							<div className="space-y-2">
								<p className="text-base font-medium leading-snug text-foreground-dark tracking-[0.32px]">
									Registration
								</p>
								<Link
									href={regUrl}
									className={buttonVariants({
										variant: "link",
										size: "link",
									})}
								>
									{regUrl}
								</Link>
							</div>
						)}
						{/* <Button
							variant={"outline"}
							color={brandColor}
							className="mt-auto"
						>
							Edit
						</Button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

const Detail = ({
	detail,
	detailName,
}: {
	detailName: string;
	detail: string;
}) => {
	return (
		<div className="flex flex-col justify-center space-y-2 grow">
			<p className="text-base font-medium leading-snug text-foreground-dark tracking-[0.32px]">
				{detailName}
			</p>
			<p className="text-base leading-relaxed text-foreground-light">
				{detail}
			</p>
		</div>
	);
};
