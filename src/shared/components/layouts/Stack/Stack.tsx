import { ComponentProps, ReactNode } from 'react';

import { VStack } from '@/shared/components/primitives/vstack';

type StackProps = ComponentProps<typeof VStack> & {
  children: ReactNode;
};

export function Stack({ children, ...props }: StackProps) {
  return <VStack {...props}>{children}</VStack>;
}
