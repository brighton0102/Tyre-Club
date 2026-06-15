import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { HStack } from '@/shared/components/primitives/hstack';

import { AppAvatar } from './AppAvatar';

const meta = {
  title: 'Design System/Atoms/AppAvatar',
  component: AppAvatar,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    name: 'Tendai Chikwanda',
  },
} satisfies Meta<typeof AppAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    source: { uri: 'https://picsum.photos/200' },
    name: 'Tendai Chikwanda',
  },
};

export const AllVariants: Story = {
  render: () => (
    <HStack space="md" className="items-center">
      <AppAvatar name="Tendai Chikwanda" size="sm" />
      <AppAvatar name="Tendai Chikwanda" size="md" />
      <AppAvatar name="Tendai Chikwanda" size="lg" />
    </HStack>
  ),
};
