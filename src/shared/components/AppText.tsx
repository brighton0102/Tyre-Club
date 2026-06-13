import { ReactNode } from 'react';

import { Text } from '@/components/ui/text';

type AppTextVariant = 'body' | 'caption' | 'title';

type AppTextProps = {
  variant?: AppTextVariant;
  children: ReactNode;
  className?: string;
};

const variantClassName: Record<AppTextVariant, string> = {
  title: 'text-2xl font-bold text-typography-900',
  body: 'text-base text-typography-700',
  caption: 'text-sm text-typography-500',
};

export function AppText({ variant = 'body', children, className }: AppTextProps) {
  return (
    <Text className={[variantClassName[variant], className].filter(Boolean).join(' ')}>
      {children}
    </Text>
  );
}
