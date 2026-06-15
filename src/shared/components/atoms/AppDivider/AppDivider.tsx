import { Divider } from '@/shared/components/primitives/divider';

import type { AppDividerProps } from './AppDivider.types';

export function AppDivider({ orientation = 'horizontal', className }: AppDividerProps) {
  return <Divider orientation={orientation} className={className} />;
}
