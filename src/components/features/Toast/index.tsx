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
  type: "error" | "success" | "info";
}
export const Toaster = ({
  description,
  action,
  type,
}:ToastComponentProps) => {
  const { toasts } = useToast()

  const getBackgroundClass = () => {
    switch (type) {
      case "error":
        return "bg-red-500"; 
      case "success":
        return "bg-green-500";
      case "info":
      default:
        return "bg-gray-500"; 
    }
  };
  return (
    <ToastProvider>
      <Toast className={getBackgroundClass()}> 
          <div className="grid gap-1">
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
