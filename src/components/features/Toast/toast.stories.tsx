import type { Meta, StoryObj } from "@storybook/react";

import {Toaster} from "@/components/features/Toast"

const meta: Meta<typeof Toaster> = {
    title: "UI/Toast",
    component: Toaster,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Toaster>;

// export const Normal: Story = {
//     args: {
//         children: "Show Toast",
//     }
// }


export const WithDescription: Story = {
    args: {
        description:"Messsage sent"
        
    }
}

export const DescriptionAndAction: Story = {
    args: {
        description:"Messsage sent",
        action: "Sent"
        
    }
}



