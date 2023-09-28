import React from "react";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { actionPropType, contentPropType, propType } from "./constants";
import * as z from "zod";
import InputWithLabel from "@/components/input/inputWithLabel";
import { Button, buttonVariants } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

//
export const ConfirmContent = ({
  loading,
  action,
  actionText,
  confirmText,
  cancelText,
  tipText,
  matches,
  setOpen,
}: contentPropType) => {
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
    <div>
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
              matches={matches}
              setOpen={setOpen}
            />
          </form>
        </Form>
      ) : (
        <ConfirmButton
          action={action}
          actionText={actionText}
          loading={loading}
          cancelText={cancelText}
          matches={matches}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

//

const ConfirmButton = ({
  action,
  actionText,
  loading,
  cancelText,
  matches,
  setOpen,
}: actionPropType) => {
  return (
    <div className="flex gap-6">
      {!matches && (
        <DialogClose
          className={buttonVariants({
            size: "full",
            variant: "outline",
            className: "border-primary text-primary",
          })}
        >
          {cancelText || "Cancel"}
        </DialogClose>
      )}

      <Button type="submit" size="full" onClick={action} loading={loading}>
        {actionText || "Submit"}
      </Button>
    </div>
  );
};
