import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Avatar, AvatarFallbackText } from './index';

const meta = {
  title: 'Design System/Primitives/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar size="md">
      <AvatarFallbackText>TC</AvatarFallbackText>
    </Avatar>
  ),
};
