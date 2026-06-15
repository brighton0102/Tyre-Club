import { ChevronDownIcon } from '@/shared/components/primitives/icon';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/shared/components/primitives/select';
import { Text } from '@/shared/components/primitives/text';
import { VStack } from '@/shared/components/primitives/vstack';
import { typographyClasses } from '@/shared/theme';

import { AppFormErrorText } from '../AppFormErrorText';

import type { AppSelectProps } from './AppSelect.types';

export function AppSelect({
  label,
  options,
  value,
  onValueChange,
  placeholder = 'Select an option',
  error,
  disabled = false,
}: AppSelectProps) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <VStack space="xs" className="mb-sp4">
      <Text className={typographyClasses.label}>{label}</Text>
      <Select
        selectedValue={value}
        onValueChange={onValueChange}
        isDisabled={disabled}
        isInvalid={Boolean(error)}
      >
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder={placeholder} value={selectedOption?.label} />
          <SelectIcon className="mr-sp3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {options.map((option) => (
              <SelectItem key={option.value} label={option.label} value={option.value} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
      {error ? <AppFormErrorText>{error}</AppFormErrorText> : null}
    </VStack>
  );
}
