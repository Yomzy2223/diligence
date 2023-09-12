import InputWithLabel from "@/components/input/inputWithLabel";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { propType } from "./constants";
import * as z from "zod";

const ConfirmAction = ({
  title,
  description,
  confirmText,
  children,
  action,
  actionText,
  cancelText,
  open,
  setOpen,
  loading,
  tipText,
}: propType) => {
  //
  const confirmSchema = z.object({
    confirm: z
      .string()
      .nonempty("Incorrect")
      .refine((confirm) => confirm === confirmText, {
        message: "To confirm this, type " + confirmText,
      }),
  });
  type confirmType = z.infer<typeof confirmSchema>;

  // Form definition
  const form = useForm<confirmType>({
    resolver: zodResolver(confirmSchema),
    defaultValues: {
      confirm: "",
    },
  });

  // Submit handler
  function onSubmit(values: confirmType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <Dialog open={open}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent
        className="sm:max-w-[425px] md:max-w-[570px] p-10 bg-white "
        cancel={() => setOpen && setOpen(false)}
      >
        <DialogHeader className="flex flex-col items-center gap-4 m-auto mb-6 ">
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && (
            <DialogDescription className="text-center">{description}</DialogDescription>
          )}
        </DialogHeader>
        {confirmText ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-10 w-[90%] m-auto "
            >
              <InputWithLabel
                form={form}
                name="confirm"
                label={`To confirm this, type "${confirmText}"`}
                placeholder={confirmText}
                tipText={tipText}
                textSize="text-xs"
              />
              <ConfirmButton
                action={action}
                actionText={actionText}
                loading={loading}
                cancelText={cancelText}
              />
            </form>
          </Form>
        ) : (
          <ConfirmButton
            action={action}
            actionText={actionText}
            loading={loading}
            cancelText={cancelText}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmAction;

//

const ConfirmButton = ({ action, actionText, loading, cancelText }: propType) => {
  return (
    <div className="flex gap-6">
      <DialogClose
        className={buttonVariants({
          size: "full",
          variant: "outline",
          className: "border-primary text-primary",
        })}
      >
        {cancelText || "Cancel"}
      </DialogClose>
      <Button type="submit" size="full" onClick={action} loading={loading}>
        {actionText || "Submit"}
      </Button>
    </div>
  );
};
