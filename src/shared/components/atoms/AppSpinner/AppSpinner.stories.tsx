import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppSpinner } from './AppSpinner';

const meta = {
  title: 'Design System/Atoms/AppSpinner',
  component: AppSpinner,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AppSpinner />,
};

export const Large: Story = {
  render: () => <AppSpinner size="large" />,
};
