import { Center } from '@/shared/components/atoms/center';
import { VStack } from '@/shared/components/atoms/vstack';

import { AppText } from './AppText';

type EmptyStateProps = {
  title: string;
  message?: string;
};

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <Center className="flex-1 py-8">
      <VStack space="sm" className="items-center px-6">
        <AppText variant="title">{title}</AppText>
        {message ? <AppText variant="body">{message}</AppText> : null}
      </VStack>
    </Center>
  );
}
