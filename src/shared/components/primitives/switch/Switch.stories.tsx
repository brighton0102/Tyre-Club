import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';

import { Switch } from './index';

const meta = {
  title: 'Design System/Primitives/Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

function SwitchStory() {
  const [value, setValue] = useState(false);

  return <Switch value={value} onValueChange={setValue} />;
}

export const Default: Story = {
  render: () => <SwitchStory />,
};
