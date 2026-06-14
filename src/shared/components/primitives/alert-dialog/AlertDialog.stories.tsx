import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';

import { Button, ButtonText } from '@/shared/components/primitives/button';
import { Text } from '@/shared/components/primitives/text';

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from './index';

const meta = {
  title: 'Design System/Primitives/AlertDialog',
  component: AlertDialog,
  decorators: [
    (Story) => (
      <View className="bg-pageBackground p-sp4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

function AlertDialogStory() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Text className="font-semibold text-textPrimary">Confirm action</Text>
            <AlertDialogCloseButton />
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>Are you sure you want to continue?</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outline" action="secondary" onPress={() => setIsOpen(false)}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button onPress={() => setIsOpen(false)}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export const Default: Story = {
  render: () => <AlertDialogStory />,
};
