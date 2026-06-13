import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppButton } from './AppButton';
import { Header } from './Header';

const meta = {
  title: 'Design System/Molecules/Header',
  component: Header,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Home',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithRightAction: Story = {
  args: {
    title: 'Vehicles',
    rightAction: <AppButton title="Add" onPress={() => {}} variant="secondary" />,
  },
};
