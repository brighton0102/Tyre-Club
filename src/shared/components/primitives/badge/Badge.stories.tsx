import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Badge, BadgeText } from './index';

const meta = {
  title: 'Design System/Primitives/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Badge>
      <BadgeText>NEW</BadgeText>
    </Badge>
  ),
};
