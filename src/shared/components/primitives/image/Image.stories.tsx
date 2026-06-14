import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Image } from './index';

const meta = {
  title: 'Design System/Primitives/Image',
  component: Image,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Image
      source={{ uri: 'https://picsum.photos/200' }}
      alt="preview"
      size="md"
    />
  ),
};
