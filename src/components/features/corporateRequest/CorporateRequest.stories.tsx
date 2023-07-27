import { Meta, StoryObj } from "@storybook/react";
import CorporateRequest from "./CorporateRequest";

const meta = {
  title: "Corporate Request",
  component: CorporateRequest,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof CorporateRequest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
