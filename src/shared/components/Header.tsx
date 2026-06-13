import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/shared/constants/colors';
import { spacing } from '@/shared/constants/spacing';

type HeaderProps = {
  title: string;
  rightAction?: ReactNode;
};

export function Header({ title, rightAction }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {rightAction ? <View style={styles.action}>{rightAction}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  action: {
    marginLeft: spacing.sm,
  },
});
