import { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/shared/components/primitives/box';
import { colorClasses, spacingClasses } from '@/shared/theme';

type ScreenProps = {
  children: ReactNode;
  scrollable?: boolean;
  className?: string;
};

export function Screen({ children, scrollable = false, className }: ScreenProps) {
  const contentClassName = ['flex-1', spacingClasses.screenPadding, className]
    .filter(Boolean)
    .join(' ');

  const content = scrollable ? (
    <ScrollView
      className="flex-1"
      contentContainerClassName={contentClassName}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  ) : (
    <Box className={contentClassName}>{children}</Box>
  );

  return (
    <SafeAreaView
      className={`flex-1 ${colorClasses.pageBackground}`}
      edges={['top', 'left', 'right']}
    >
      {content}
    </SafeAreaView>
  );
}
