import type { ImageSourcePropType } from 'react-native';

export type AppImageRadius = 'sm' | 'md' | 'lg' | 'full';

export type AppImageSize = 'sm' | 'md' | 'lg' | 'full';

export interface AppImageProps {
  source: ImageSourcePropType;
  alt: string;
  size?: AppImageSize;
  radius?: AppImageRadius;
  fallback?: string;
  className?: string;
}
