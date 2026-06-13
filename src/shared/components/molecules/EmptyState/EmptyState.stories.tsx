import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { EmptyState } from './EmptyState';

const meta = {
  title: 'Design System/Molecules/EmptyState',
  component: EmptyState,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground flex-1">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleOnly: Story = {
  args: {
    title: 'No vehicles yet',
  },
};

export const WithMessage: Story = {
  args: {
    title: 'No vehicles yet',
    message: 'Add your first vehicle to start tracking tire health.',
  },
};
