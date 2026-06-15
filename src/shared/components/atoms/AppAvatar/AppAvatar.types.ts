import type { ImageSourcePropType } from 'react-native';

export type AppAvatarSize = 'sm' | 'md' | 'lg';

export interface AppAvatarProps {
  name?: string;
  source?: ImageSourcePropType;
  size?: AppAvatarSize;
}
