import { ReactNode } from 'react';

import { Card } from '@/components/ui/card';
import { VStack } from '@/components/ui/vstack';

import { AppText } from './AppText';

type AppCardProps = {
  title?: string;
  children: ReactNode;
};

export function AppCard({ title, children }: AppCardProps) {
  return (
    <Card className="p-4">
      <VStack space="sm">
        {title ? <AppText variant="title">{title}</AppText> : null}
        {children}
      </VStack>
    </Card>
  );
}
