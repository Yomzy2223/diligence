import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from "@storybook/react";

import { within, userEvent } from '@storybook/testing-library';
import { headers, dataBody } from "../components/Feautures/DiligenceTable/constant";
import { DiligenceTable } from "../components/Feautures/DiligenceTable";

const meta = {
    title: 'DiligenceTable',
    component: DiligenceTable,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
} satisfies Meta<typeof DiligenceTable>;
export default meta;
type Story = StoryObj<typeof meta>;

 

export const TableWithHeaderAndBody: Story = {
    args: {
        header: headers,
        body:dataBody
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        
    // Assert that table headers are rendered
    headers.forEach((el) => {
        const headerElement = canvas.getByText(el);
        expect(headerElement).toBeInTheDocument();
      });
  
      // Assert that table body data is rendered
      dataBody.forEach((rowData) => {
        rowData.forEach((data) => {
          const dataElement = canvas.getByText(data);
          expect(dataElement).toBeInTheDocument();
        });
      });
  

    
    }
}
 
  
  
