import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { LoadingState } from './LoadingState';

const meta = {
  title: 'Design System/Molecules/LoadingState',
  component: LoadingState,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground flex-1">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof LoadingState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: 'Loading vehicles...',
  },
};
