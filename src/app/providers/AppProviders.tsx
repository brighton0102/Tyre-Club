import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FontProvider } from '@/app/providers/FontProvider';
import { GluestackUIProvider } from '@/shared/components/primitives/gluestack-ui-provider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
    },
  },
});

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <GluestackUIProvider>
      <FontProvider>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </SafeAreaProvider>
      </FontProvider>
    </GluestackUIProvider>
  );
}
