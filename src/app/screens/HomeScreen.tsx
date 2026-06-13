import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MainStackParamList } from '@/app/navigation/types';
import { useAuthStore } from '@/features/auth/hooks/useAuthStore';
import { AppButton, AppText, ScreenHeader, Screen, Stack } from '@/shared/components';
import { spacingClasses } from '@/shared/theme';

export function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <Screen>
      <ScreenHeader title="Home" />
      <Stack space="md" className={`flex-1 items-center justify-center ${spacingClasses.sectionX}`}>
        <AppText variant="h1">Welcome{user ? `, ${user.name}` : ''}!</AppText>
        <AppText variant="body">You are signed in to Tire Club.</AppText>
      </Stack>
      <Stack space="sm">
        <AppButton title="View UI Example" onPress={() => navigation.navigate('UiExample')} />
        <AppButton title="Log Out" onPress={logout} variant="secondary" />
      </Stack>
    </Screen>
  );
}
