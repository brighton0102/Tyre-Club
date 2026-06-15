import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AppTextarea } from './AppTextarea';

const meta = {
  title: 'Design System/Atoms/AppTextarea',
  component: AppTextarea,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    label: 'Notes',
    placeholder: 'Optional notes…',
  },
} satisfies Meta<typeof AppTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultStory(args: React.ComponentProps<typeof AppTextarea>) {
  const [value, setValue] = useState('');
  return <AppTextarea {...args} value={value} onChangeText={setValue} />;
}

function WithValueStory(args: React.ComponentProps<typeof AppTextarea>) {
  const [value, setValue] = useState('Checked tyre pressure and tread depth.');
  return <AppTextarea {...args} value={value} onChangeText={setValue} />;
}

function WithErrorStory(args: React.ComponentProps<typeof AppTextarea>) {
  const [value, setValue] = useState('');
  return <AppTextarea {...args} value={value} onChangeText={setValue} error="Notes are required" />;
}

function DisabledStory(args: React.ComponentProps<typeof AppTextarea>) {
  const [value, setValue] = useState('Read-only notes');
  return <AppTextarea {...args} value={value} onChangeText={setValue} editable={false} />;
}

export const Default: Story = {
  render: (args) => <DefaultStory {...args} />,
};

export const WithValue: Story = {
  render: (args) => <WithValueStory {...args} />,
};

export const WithError: Story = {
  render: (args) => <WithErrorStory {...args} />,
};

export const Disabled: Story = {
  render: (args) => <DisabledStory {...args} />,
};
