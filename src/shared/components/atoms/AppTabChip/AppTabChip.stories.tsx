import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';

import { HStack } from '@/shared/components/primitives/hstack';

import { AppTabChip } from './AppTabChip';

const meta = {
  title: 'Design System/Atoms/AppTabChip',
  component: AppTabChip,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
  args: {
    label: 'Checks',
    onPress: () => {},
  },
} satisfies Meta<typeof AppTabChip>;

export default meta;

type Story = StoryObj<typeof meta>;

function TabChipStory(args: React.ComponentProps<typeof AppTabChip>) {
  const [active, setActive] = useState(Boolean(args.active));
  return <AppTabChip {...args} active={active} onPress={() => setActive(true)} />;
}

export const Default: Story = {
  render: (args) => <TabChipStory {...args} />,
};

export const Active: Story = {
  args: { active: true },
  render: (args) => <TabChipStory {...args} />,
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  render: () => <AllVariantsStory />,
};

function AllVariantsStory() {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = ['Overview', 'Checks', 'Trips'];

  return (
    <HStack space="sm">
      {tabs.map((tab) => (
        <AppTabChip
          key={tab}
          label={tab}
          active={activeTab === tab.toLowerCase()}
          onPress={() => setActiveTab(tab.toLowerCase())}
        />
      ))}
    </HStack>
  );
}
