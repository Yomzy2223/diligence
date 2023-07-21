import type { Meta, StoryObj } from "@storybook/react";

import { EmptyList } from "./index";

const meta: Meta<typeof EmptyList> = {
	component: EmptyList,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmptyList>;

export const Primary: Story = {
	render: () => <EmptyList />,
};
