import type { Meta, StoryObj } from "@storybook/react";

import { AuthLayout } from ".";
import { Children } from "react";

const meta = {
  component: AuthLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof AuthLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const AuthLayoutComponent: Story = {
  args: {
    children: "children",
  },
};
