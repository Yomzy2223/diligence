"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

interface ToastComponentProps {
  title: string;
  description: string;
  action: string;
}
export const Toaster = ({
  title,
  description,
  action
}:ToastComponentProps) => {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      <Toast>
          <div className="grid gap-1">
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && (
            <ToastDescription>{description}</ToastDescription>
          )}
        </div>
        <Button>{action}</Button>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}
