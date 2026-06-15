import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { HStack } from '@/shared/components/primitives/hstack';

import { APP_ICON_MAP, type AppIconName } from './AppIcon.types';
import { AppIcon } from './AppIcon';

const meta = {
  title: 'Design System/Atoms/AppIcon',
  component: AppIcon,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    name: 'search',
  },
} satisfies Meta<typeof AppIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <HStack space="md" className="items-center">
      <AppIcon name="calendar" size="sm" />
      <AppIcon name="calendar" size="md" />
      <AppIcon name="calendar" size="lg" />
    </HStack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <HStack space="md" className="flex-wrap">
      {(Object.keys(APP_ICON_MAP) as AppIconName[]).map((name) => (
        <AppIcon key={name} name={name} />
      ))}
    </HStack>
  ),
};
