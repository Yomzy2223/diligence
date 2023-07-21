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
		name: "Guaranty Trust Bank",
		address: "No, 51 West side street",
		adminName: "Mr. Oluwole",
		adminEmail: "Oluwole@gmail.com",
		regUrl: "https://www.sidebrief.diligence/gtbank.com",
		brandColor: "#DE4A09",
	},
};
