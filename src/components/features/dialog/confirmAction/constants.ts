import { ReactNode } from "react";

export interface actionPropType {
  action?: () => void;
  actionText?: string;
  cancelText?: string;
  loading: boolean;
  matches: boolean;
  setOpen: (arg: boolean) => void;
}
export interface contentPropType extends actionPropType {
  confirmText?: string;
  tipText?: string;
}

export interface propType extends contentPropType {
  title?: string;
  description?: string;
  children?: string | ReactNode;
  open: boolean;
}
