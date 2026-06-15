import { Spinner } from '@/shared/components/primitives/spinner';
import { colors } from '@/shared/theme';

import type { AppSpinnerProps } from './AppSpinner.types';

export function AppSpinner({ size = 'small', className }: AppSpinnerProps) {
  return <Spinner size={size} color={colors.yellow} className={className} />;
}
