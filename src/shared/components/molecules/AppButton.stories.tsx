import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppButton } from './AppButton';

const meta = {
  title: 'Design System/Atoms/AppButton',
  component: AppButton,
  decorators: [
    (Story) => (
      <View className="p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Sign In',
    onPress: () => {},
  },
} satisfies Meta<typeof AppButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    title: 'Cancel',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
