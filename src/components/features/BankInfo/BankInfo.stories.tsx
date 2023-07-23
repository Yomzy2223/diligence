import type { Meta, StoryObj } from "@storybook/react";
import Gtbank from "@/assets/bank/gt-bank-original.png";

import { BankInfo } from "./index";

const meta: Meta<typeof BankInfo> = {
	component: BankInfo,
};

export default meta;

type Story = StoryObj<typeof BankInfo>;

export const Primary: Story = {
	args: {
		image: Gtbank.src,
		name: "Gtbank",
		numberOfOnboardedBranches: 32,
		numberOfBusinesssVerified: 12198,
		totalAmountSpent: 289323,
	},
};
