import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';

import { AppTextInput } from './AppTextInput';

const meta = {
  title: 'Design System/Molecules/AppTextInput',
  component: AppTextInput,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
} satisfies Meta<typeof AppTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultStory(args: React.ComponentProps<typeof AppTextInput>) {
  const [value, setValue] = useState('');
  return <AppTextInput {...args} value={value} onChangeText={setValue} />;
}

function WithValueStory(args: React.ComponentProps<typeof AppTextInput>) {
  const [value, setValue] = useState('driver@tireclub.com');
  return <AppTextInput {...args} value={value} onChangeText={setValue} />;
}

function WithErrorStory(args: React.ComponentProps<typeof AppTextInput>) {
  const [value, setValue] = useState('invalid');
  return (
    <AppTextInput
      {...args}
      value={value}
      onChangeText={setValue}
      error="Enter a valid email address"
    />
  );
}

function PasswordStory(args: React.ComponentProps<typeof AppTextInput>) {
  const [value, setValue] = useState('');
  return <AppTextInput {...args} value={value} onChangeText={setValue} />;
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

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    secureTextEntry: true,
  },
  render: (args) => <PasswordStory {...args} />,
};
