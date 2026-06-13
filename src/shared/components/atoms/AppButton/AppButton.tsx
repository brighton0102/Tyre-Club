import { Button, ButtonSpinner, ButtonText } from '@/shared/components/primitives/button';
import { colorClasses } from '@/shared/theme';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
};

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
}: AppButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Button
      onPress={onPress}
      isDisabled={isDisabled}
      action={variant === 'primary' ? 'primary' : 'secondary'}
      variant="solid"
      size="md"
      className={
        variant === 'secondary' ? `${colorClasses.surfacePrimary} border-textSecondary` : undefined
      }
    >
      {loading ? <ButtonSpinner /> : <ButtonText>{title}</ButtonText>}
    </Button>
  );
}
