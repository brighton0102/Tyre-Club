import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppIconButton } from './AppIconButton';

const meta = {
  title: 'Design System/Atoms/AppIconButton',
  component: AppIconButton,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    icon: 'add',
    onPress: () => {},
    accessibilityLabel: 'Add',
  },
} satisfies Meta<typeof AppIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
