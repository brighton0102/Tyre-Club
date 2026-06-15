import { HStack } from '@/shared/components/primitives/hstack';
import { Switch } from '@/shared/components/primitives/switch';
import { Text } from '@/shared/components/primitives/text';
import { typographyClasses } from '@/shared/theme';

import type { AppSwitchProps } from './AppSwitch.types';

export function AppSwitch({ label, value, onValueChange, disabled = false }: AppSwitchProps) {
  return (
    <HStack space="md" className="items-center justify-between">
      <Text className={typographyClasses.body}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        accessibilityLabel={label}
      />
    </HStack>
  );
}
