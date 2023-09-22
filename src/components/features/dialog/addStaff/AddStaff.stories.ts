import { Meta, StoryObj } from "@storybook/react";
import AddStaff from ".";

const meta = {
  title: "Add Staff",
  component: AddStaff,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   argTypes: {
  //     children: string,
  //   },
} satisfies Meta<typeof AddStaff>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Add Staff",
  },
};

export const Transparent: Story = {
  args: {
    children: "Add Staff",
  },
};
