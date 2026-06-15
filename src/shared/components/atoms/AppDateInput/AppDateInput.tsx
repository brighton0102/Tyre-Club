import DateTimePicker, { type DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform, Pressable } from 'react-native';

import { CalendarDaysIcon } from '@/shared/components/primitives/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/shared/components/primitives/input';
import { Text } from '@/shared/components/primitives/text';
import { VStack } from '@/shared/components/primitives/vstack';
import { colors, typographyClasses } from '@/shared/theme';

import { AppFormErrorText } from '../AppFormErrorText';

import type { AppDateInputProps } from './AppDateInput.types';

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
}

export function AppDateInput({
  label,
  value,
  onChange,
  error,
  disabled = false,
  minimumDate,
  maximumDate,
}: AppDateInputProps) {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }

    if (event.type === 'dismissed') {
      setShowPicker(false);
      return;
    }

    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <VStack space="xs" className="mb-sp4">
      <Text className={typographyClasses.label}>{label}</Text>
      <Pressable
        onPress={() => !disabled && setShowPicker(true)}
        accessibilityRole="button"
        accessibilityLabel={label}
        disabled={disabled}
      >
        <Input variant="outline" size="md" isInvalid={Boolean(error)} isDisabled={disabled}>
          <InputField
            value={formatDate(value)}
            editable={false}
            placeholder="dd / mm / yyyy"
            placeholderTextColor={colors.textSecondary}
            pointerEvents="none"
          />
          <InputSlot className="pr-sp3">
            <InputIcon as={CalendarDaysIcon} />
          </InputSlot>
        </Input>
      </Pressable>
      {error ? <AppFormErrorText>{error}</AppFormErrorText> : null}
      {showPicker ? (
        <DateTimePicker
          value={value}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      ) : null}
    </VStack>
  );
}
