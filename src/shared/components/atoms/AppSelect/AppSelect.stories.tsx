import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AppSelect } from './AppSelect';

const vehicleMakes = [
  { label: 'Toyota', value: 'toyota' },
  { label: 'Nissan', value: 'nissan' },
  { label: 'Mazda', value: 'mazda' },
];

const meta = {
  title: 'Design System/Atoms/AppSelect',
  component: AppSelect,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    label: 'Make',
    options: vehicleMakes,
    placeholder: 'Select or type vehicle make',
    onValueChange: () => {},
  },
} satisfies Meta<typeof AppSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

function SelectStory(args: React.ComponentProps<typeof AppSelect>) {
  const [value, setValue] = useState(args.value);
  return <AppSelect {...args} value={value} onValueChange={setValue} />;
}

export const Default: Story = {
  render: (args) => <SelectStory {...args} />,
};

export const WithValue: Story = {
  args: { value: 'toyota' },
  render: (args) => <SelectStory {...args} />,
};

export const WithError: Story = {
  args: { error: 'Select a vehicle make' },
  render: (args) => <SelectStory {...args} />,
};

export const Disabled: Story = {
  args: { disabled: true, value: 'toyota' },
  render: (args) => <SelectStory {...args} />,
};
