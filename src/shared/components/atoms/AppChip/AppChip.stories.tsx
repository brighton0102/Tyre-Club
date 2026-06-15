import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import { AppChip } from './AppChip';

const meta = {
  title: 'Design System/Atoms/AppChip',
  component: AppChip,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    label: 'Needs attention',
    onPress: () => {},
  },
} satisfies Meta<typeof AppChip>;

export default meta;

type Story = StoryObj<typeof meta>;

function ChipStory(args: React.ComponentProps<typeof AppChip>) {
  const [selected, setSelected] = useState(Boolean(args.selected));
  return <AppChip {...args} selected={selected} onPress={() => setSelected((value) => !value)} />;
}

export const Default: Story = {
  render: (args) => <ChipStory {...args} />,
};

export const Selected: Story = {
  args: { selected: true },
  render: (args) => <ChipStory {...args} />,
};

export const Disabled: Story = {
  args: { disabled: true },
};
