import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppDivider } from './AppDivider';

const meta = {
  title: 'Design System/Atoms/AppDivider',
  component: AppDivider,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AppDivider />,
};

export const Vertical: Story = {
  render: () => (
    <View className="h-sp8 flex-row items-center">
      <AppDivider orientation="vertical" className="mx-sp2" />
    </View>
  ),
};
