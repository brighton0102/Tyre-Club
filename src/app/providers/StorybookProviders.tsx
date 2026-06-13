import { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FontProvider } from '@/app/providers/FontProvider';
import { GluestackUIProvider } from '@/shared/components/primitives/gluestack-ui-provider';

type StorybookProvidersProps = {
  children: ReactNode;
};

export function StorybookProviders({ children }: StorybookProvidersProps) {
  return (
    <GluestackUIProvider>
      <FontProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </FontProvider>
    </GluestackUIProvider>
  );
}
