import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'コンポーネント/Button',
  component: Button,
  // Parameters are a set of static, named metadata about a story
  // typically used to control the behavior of Storybook features and addons.

  parameters: {
    // Q. what does it means `layout` here?
    // A. The layout parameter allows you to configure how stories are positioned in Storybook's Canvas tab.
    // see: https://storybook.js.org/docs/react/configure/story-layout
    // Q. required?
    // A. No. optional.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  // “Args” are Storybook’s mechanism for defining those arguments in a single JavaScript object
  // Args can be used to dynamically change props
  // args?: infer DefaultArgs;
  args: {
    primary: true,
    label: 'Button',
  },
  // render?: ArgsStoryFn<ReactRenderer, any>;
  // component?: infer Component;
  // https://storybook.js.org/docs/react/writing-stories/loaders
  loaders: [
    async () => ({
      todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
    }),
  ],
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
// 
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
