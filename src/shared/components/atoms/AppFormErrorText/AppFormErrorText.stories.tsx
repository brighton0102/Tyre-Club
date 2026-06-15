import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppFormErrorText } from './AppFormErrorText';

const meta = {
  title: 'Design System/Atoms/AppFormErrorText',
  component: AppFormErrorText,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppFormErrorText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Enter a valid email address' },
};
