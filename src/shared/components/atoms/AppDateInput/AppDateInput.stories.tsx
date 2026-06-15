import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AppDateInput } from './AppDateInput';

const meta = {
  title: 'Design System/Atoms/AppDateInput',
  component: AppDateInput,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    label: 'Expiry date',
    value: new Date(2026, 5, 14),
    onChange: () => {},
  },
} satisfies Meta<typeof AppDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

function DateInputStory(args: React.ComponentProps<typeof AppDateInput>) {
  const [value, setValue] = useState(args.value);
  return <AppDateInput {...args} value={value} onChange={setValue} />;
}

export const Default: Story = {
  render: (args) => <DateInputStory {...args} />,
};

export const WithValue: Story = {
  args: { value: new Date(2027, 0, 15) },
  render: (args) => <DateInputStory {...args} />,
};

export const WithError: Story = {
  args: { error: 'Use valid registration format' },
  render: (args) => <DateInputStory {...args} />,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => <DateInputStory {...args} />,
};
