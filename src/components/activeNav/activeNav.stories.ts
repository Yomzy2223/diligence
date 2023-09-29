import type { Meta, StoryObj } from "@storybook/react";

import ActiveNav from "./index";

const meta = {
  component: ActiveNav,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ActiveNav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveTabComponent: Story = {
  args: {
    nav: [
      { text: "Nav1", path: "/" },
      { text: "Nav2", path: "/nav2" },
      { text: "Nav3", path: "/nav3" },
    ],
    defaultURL: "/",
  },
};
