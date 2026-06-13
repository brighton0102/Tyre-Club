import { ReactNode } from 'react';
import { View } from 'react-native';

import { Text } from '@/shared/components/primitives/text';
import { typographyClasses } from '@/shared/theme';

type ScreenHeaderProps = {
  title: string;
  rightAction?: ReactNode;
};

export function ScreenHeader({ title, rightAction }: ScreenHeaderProps) {
  return (
    <View className="mb-sp4 flex-row items-center justify-between">
      <Text className={`${typographyClasses.h1} flex-1`}>{title}</Text>
      {rightAction ? <View className="ml-sp2">{rightAction}</View> : null}
    </View>
  );
}
