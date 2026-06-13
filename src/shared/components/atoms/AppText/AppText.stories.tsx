import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Stack } from '../../layouts/Stack';

import { AppText } from './AppText';

const meta = {
  title: 'Design System/Atoms/AppText',
  component: AppText,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: 'display', children: 'Display text' },
};

export const H1: Story = {
  args: { variant: 'h1', children: 'Heading 1' },
};

export const H2: Story = {
  args: { variant: 'h2', children: 'Heading 2' },
};

export const H3: Story = {
  args: { variant: 'h3', children: 'Heading 3' },
};

export const Body: Story = {
  args: { variant: 'body', children: 'Body text for paragraphs and general content.' },
};

export const Caption: Story = {
  args: { variant: 'caption', children: 'Caption or helper text' },
};

export const Label: Story = {
  args: { variant: 'label', children: 'Field label' },
};

export const Mono: Story = {
  args: { variant: 'mono', children: 'VIN1234567890' },
};

export const AllVariants: Story = {
  args: { children: 'Preview' },
  render: () => (
    <Stack space="sm">
      <AppText variant="display">Display</AppText>
      <AppText variant="h1">Heading 1</AppText>
      <AppText variant="h2">Heading 2</AppText>
      <AppText variant="h3">Heading 3</AppText>
      <AppText variant="body">Body</AppText>
      <AppText variant="caption">Caption</AppText>
      <AppText variant="label">Label</AppText>
      <AppText variant="mono">Mono</AppText>
    </Stack>
  ),
};
