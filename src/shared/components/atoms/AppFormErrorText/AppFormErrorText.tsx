import { Text } from '@/shared/components/primitives/text';
import { colorClasses, typographyClasses } from '@/shared/theme';

import type { AppFormErrorTextProps } from './AppFormErrorText.types';

export function AppFormErrorText({ children }: AppFormErrorTextProps) {
  return <Text className={`${typographyClasses.caption} ${colorClasses.red}`}>{children}</Text>;
}
