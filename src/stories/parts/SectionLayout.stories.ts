import { Meta, StoryObj } from "@storybook/react";
import SectionLayout from './SectionLayout';

const meta = {
    title: 'パーツ/SectionLayout',
    component: SectionLayout,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SectionLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        rows: [
            {id: 1, name: 'section1'},
            {id: 1, name: 'section2'},
        ]
    },
};