import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { HStack } from '@/shared/components/primitives/hstack';

import { AppImage } from './AppImage';

const meta = {
  title: 'Design System/Atoms/AppImage',
  component: AppImage,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    source: { uri: 'https://picsum.photos/200' },
    alt: 'Vehicle preview',
  },
} satisfies Meta<typeof AppImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFallback: Story = {
  args: {
    source: { uri: 'https://invalid.example/image.png' },
    alt: 'Vehicle preview',
    fallback: 'No image',
  },
};

export const AllVariants: Story = {
  render: () => (
    <HStack space="md" className="items-center">
      <AppImage source={{ uri: 'https://picsum.photos/201' }} alt="Small" size="sm" radius="sm" />
      <AppImage source={{ uri: 'https://picsum.photos/202' }} alt="Medium" size="md" radius="md" />
      <AppImage source={{ uri: 'https://picsum.photos/203' }} alt="Large" size="lg" radius="lg" />
      <AppImage source={{ uri: 'https://picsum.photos/204' }} alt="Round" size="sm" radius="full" />
    </HStack>
  ),
};
