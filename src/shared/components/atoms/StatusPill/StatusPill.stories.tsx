import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { HStack } from '@/shared/components/primitives/hstack';

import { StatusPill } from './StatusPill';

const meta = {
  title: 'Design System/Atoms/StatusPill',
  component: StatusPill,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof StatusPill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'allGood' },
};

export const AttentionRequired: Story = {
  args: { variant: 'attentionRequired' },
};

export const NeedsAttention: Story = {
  args: { variant: 'needsAttention' },
};

export const AllGood: Story = {
  args: { variant: 'allGood' },
};

export const LicensePending: Story = {
  args: { variant: 'licensePending' },
};

export const AllVariants: Story = {
  args: { variant: 'allGood' },
  render: () => (
    <HStack space="sm" className="flex-wrap">
      <StatusPill variant="attentionRequired" />
      <StatusPill variant="needsAttention" />
      <StatusPill variant="allGood" />
      <StatusPill variant="licensePending" />
    </HStack>
  ),
};

export const CustomLabel: Story = {
  args: { variant: 'licensePending', label: 'Awaiting Renewal' },
};
