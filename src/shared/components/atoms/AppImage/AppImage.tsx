import { useState } from 'react';

import { Box } from '@/shared/components/primitives/box';
import { Center } from '@/shared/components/primitives/center';
import { Image } from '@/shared/components/primitives/image';
import { Text } from '@/shared/components/primitives/text';
import { colorClasses, typographyClasses } from '@/shared/theme';

import type { AppImageProps } from './AppImage.types';

const sizeMap = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  full: 'full',
} as const;

const radiusClassName = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const;

export function AppImage({
  source,
  alt,
  size = 'md',
  radius = 'md',
  fallback,
  className,
}: AppImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <Center
        className={`${radiusClassName[radius]} bg-pageBackground ${className ?? ''}`}
        accessibilityLabel={alt}
      >
        <Text className={`${typographyClasses.caption} ${colorClasses.textSecondary}`}>
          {fallback ?? alt}
        </Text>
      </Center>
    );
  }

  return (
    <Box className={`overflow-hidden ${radiusClassName[radius]} ${className ?? ''}`}>
      <Image
        source={source}
        alt={alt}
        size={sizeMap[size]}
        onError={() => setHasError(true)}
        accessibilityLabel={alt}
      />
    </Box>
  );
}
