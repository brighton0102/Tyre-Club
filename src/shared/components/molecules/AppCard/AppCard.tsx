import { ReactNode } from 'react';

import { Card } from '@/shared/components/atoms/card';
import { VStack } from '@/shared/components/atoms/vstack';
import { colorClasses, shadowClasses, spacingClasses } from '@/shared/theme';

import { AppText } from '../AppText';

type AppCardProps = {
  title?: string;
  children: ReactNode;
};

export function AppCard({ title, children }: AppCardProps) {
  return (
    <Card
      className={`${colorClasses.surfacePrimary} rounded-md ${spacingClasses.screenPadding} ${shadowClasses.card}`}
    >
      <VStack space="sm">
        {title ? <AppText variant="h2">{title}</AppText> : null}
        {children}
      </VStack>
    </Card>
  );
}
