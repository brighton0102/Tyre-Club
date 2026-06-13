import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppButton } from '../../atoms/AppButton';
import { ScreenHeader } from './ScreenHeader';

const meta = {
  title: 'Design System/Molecules/ScreenHeader',
  component: ScreenHeader,
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
} satisfies Meta<typeof ScreenHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithRightAction: Story = {
  args: {
    title: 'Vehicles',
    rightAction: <AppButton title="Add" onPress={() => {}} variant="secondary" />,
  },
};
