import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppText } from '../AppText';
import { AppCard } from './AppCard';

const meta = {
  title: 'Design System/Molecules/AppCard',
  component: AppCard,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithTitle: Story = {
  args: {
    title: 'Vehicle summary',
    children: (
      <AppText variant="body">2019 Toyota RAV4 — All-season tires due for rotation.</AppText>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    children: <AppText variant="body">Card content without a title.</AppText>,
  },
};
