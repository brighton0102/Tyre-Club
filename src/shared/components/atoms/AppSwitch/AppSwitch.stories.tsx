import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AppSwitch } from './AppSwitch';

const meta = {
  title: 'Design System/Atoms/AppSwitch',
  component: AppSwitch,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    label: 'Notifications',
    value: false,
    onValueChange: () => {},
  },
} satisfies Meta<typeof AppSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

function SwitchStory(args: React.ComponentProps<typeof AppSwitch>) {
  const [value, setValue] = useState(args.value);
  return <AppSwitch {...args} value={value} onValueChange={setValue} />;
}

export const Default: Story = {
  render: (args) => <SwitchStory {...args} />,
};

export const On: Story = {
  args: { value: true },
  render: (args) => <SwitchStory {...args} />,
};

export const Disabled: Story = {
  args: { disabled: true, value: true },
  render: (args) => <SwitchStory {...args} />,
};
