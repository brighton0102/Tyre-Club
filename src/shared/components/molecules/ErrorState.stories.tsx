import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { View } from 'react-native';

import { ErrorState } from './ErrorState';

const meta = {
  title: 'Design System/Molecules/ErrorState',
  component: ErrorState,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground flex-1">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ErrorState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Unable to load your vehicles. Please try again.',
  },
};

export const WithRetry: Story = {
  args: {
    message: 'Unable to load your vehicles. Please try again.',
    onRetry: fn(),
  },
};
