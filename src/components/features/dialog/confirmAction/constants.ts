import { ReactNode } from "react";

export interface propType {
  title?: string;
  description?: string;
  confirmText?: string;
  children?: string | ReactNode;
  action?: () => void;
  actionText?: string;
  cancelText?: string;
  open?: boolean;
  setOpen?: (arg: boolean) => void;
  loading?: boolean;
  tipText?: string;
}
