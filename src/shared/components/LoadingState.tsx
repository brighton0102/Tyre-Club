import { Center } from '@/components/ui/center';
import { Spinner } from '@/components/ui/spinner';
import { VStack } from '@/components/ui/vstack';

import { AppText } from './AppText';

type LoadingStateProps = {
  message?: string;
};

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <Center className="flex-1 py-8">
      <VStack space="md" className="items-center">
        <Spinner size="large" />
        <AppText variant="body">{message}</AppText>
      </VStack>
    </Center>
  );
}
