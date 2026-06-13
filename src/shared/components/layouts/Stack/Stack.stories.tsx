import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { AppText } from '../../atoms/AppText';
import { Stack } from './Stack';

const meta = {
  title: 'Design System/Layouts/Stack',
  component: Stack,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    space: 'md',
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <Stack {...args}>
      <AppText variant="body">First item</AppText>
      <AppText variant="body">Second item</AppText>
      <AppText variant="body">Third item</AppText>
    </Stack>
  ),
};
