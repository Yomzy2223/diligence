import type { Meta, StoryObj } from "@storybook/react";

import { SettingContext } from "./index";

const meta: Meta<typeof SettingContext> = {
	component: SettingContext,
};

export default meta;

type Story = StoryObj<typeof SettingContext>;

export const Default: Story = {
	args: {},
};
