import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  useFonts,
} from '@expo-google-fonts/dm-sans';
import { DMMono_400Regular } from '@expo-google-fonts/dm-mono';
import { ReactNode } from 'react';

import { Center } from '@/shared/components/primitives/center';
import { Spinner } from '@/shared/components/primitives/spinner';

type FontProviderProps = {
  children: ReactNode;
};

export function FontProvider({ children }: FontProviderProps) {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
    DMMono_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <Center className="flex-1">
        <Spinner size="large" />
      </Center>
    );
  }

  return children;
}
