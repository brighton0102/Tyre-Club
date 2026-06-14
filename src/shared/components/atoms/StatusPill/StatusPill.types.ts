export type StatusPillVariant =
  | 'attentionRequired'
  | 'needsAttention'
  | 'allGood'
  | 'licensePending';

export interface StatusPillProps {
  variant: StatusPillVariant;
  label?: string;
}
