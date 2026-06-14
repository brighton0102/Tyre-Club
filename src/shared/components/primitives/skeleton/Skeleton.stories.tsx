import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Skeleton, SkeletonText } from './index';

const meta = {
  title: 'Design System/Primitives/Skeleton',
  component: Skeleton,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <View className="gap-sp2">
      <Skeleton className="h-20 w-48" />
      <SkeletonText _lines={2} className="h-3" />
    </View>
  ),
};
