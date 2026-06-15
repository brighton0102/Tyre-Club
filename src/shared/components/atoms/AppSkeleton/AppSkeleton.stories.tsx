import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppText } from '../AppText';

import { AppSkeleton } from './AppSkeleton';

const meta = {
  title: 'Design System/Atoms/AppSkeleton',
  component: AppSkeleton,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AppSkeleton className="h-sp8 w-48" />,
};

export const TextLines: Story = {
  render: () => <AppSkeleton lines={3} />,
};

export const Loaded: Story = {
  render: () => (
    <AppSkeleton isLoaded className="h-sp8 w-48">
      <AppText variant="body">Content loaded</AppText>
    </AppSkeleton>
  ),
};
