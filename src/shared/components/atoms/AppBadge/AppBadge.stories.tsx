import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { HStack } from '@/shared/components/primitives/hstack';

import { AppBadge } from './AppBadge';

const meta = {
  title: 'Design System/Atoms/AppBadge',
  component: AppBadge,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    label: 'NEW',
  },
} satisfies Meta<typeof AppBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <HStack space="sm" className="flex-wrap">
      <AppBadge label="Default" variant="default" />
      <AppBadge label="Success" variant="success" />
      <AppBadge label="Warning" variant="warning" />
      <AppBadge label="Error" variant="error" />
    </HStack>
  ),
};
