import type { ComponentType } from 'react';

import {
  AddIcon,
  AlertCircleIcon,
  CalendarDaysIcon,
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  EditIcon,
  EyeIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
  TrashIcon,
} from '@/shared/components/primitives/icon';

export type AppIconName =
  | 'add'
  | 'alertCircle'
  | 'calendar'
  | 'check'
  | 'chevronDown'
  | 'close'
  | 'edit'
  | 'eye'
  | 'menu'
  | 'search'
  | 'settings'
  | 'trash';

export type AppIconSize = 'sm' | 'md' | 'lg';

export interface AppIconProps {
  name: AppIconName;
  size?: AppIconSize;
  className?: string;
}

export const APP_ICON_MAP: Record<
  AppIconName,
  ComponentType<{ size?: AppIconSize; className?: string }>
> = {
  add: AddIcon,
  alertCircle: AlertCircleIcon,
  calendar: CalendarDaysIcon,
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
  close: CloseIcon,
  edit: EditIcon,
  eye: EyeIcon,
  menu: MenuIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};
