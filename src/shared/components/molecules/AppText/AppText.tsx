import { ReactNode } from 'react';

import { Text } from '@/shared/components/atoms/text';
import { typographyClasses, type TypographyVariant } from '@/shared/theme';

type AppTextVariant = TypographyVariant | 'title';

type AppTextProps = {
  variant?: AppTextVariant;
  children: ReactNode;
  className?: string;
};

const variantClassName: Record<AppTextVariant, string> = {
  ...typographyClasses,
  title: typographyClasses.h1,
};

export function AppText({ variant = 'body', children, className }: AppTextProps) {
  return (
    <Text className={[variantClassName[variant], className].filter(Boolean).join(' ')}>
      {children}
    </Text>
  );
}
