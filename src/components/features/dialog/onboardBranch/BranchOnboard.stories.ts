import { Meta, StoryObj } from "@storybook/react";
import BranchOnboard from ".";

const meta = {
  title: "Branch Onboard",
  component: BranchOnboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   argTypes: {
  //     children: string,
  //   },
} satisfies Meta<typeof BranchOnboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Onboard",
  },
};

export const Transparent: Story = {
  args: {
    children: "Onboard",
  },
};
