import type { Meta, StoryObj } from '@storybook/react';

import { AppText } from '../../atoms/AppText';
import { Screen } from './Screen';

const meta = {
  title: 'Design System/Layouts/Screen',
  component: Screen,
  args: {
    children: <AppText variant="body">Screen content</AppText>,
  },
} satisfies Meta<typeof Screen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Scrollable: Story = {
  args: {
    scrollable: true,
    children: (
      <>
        <AppText variant="h1">Scrollable screen</AppText>
        <AppText variant="body">Content scrolls when it exceeds the viewport.</AppText>
      </>
    ),
  },
};
