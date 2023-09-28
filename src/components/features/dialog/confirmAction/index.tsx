import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { propType } from "./constants";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ConfirmContent } from "./Content";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
  const matches = matchMedia("(max-width: 767px)").matches;

  return (
    <>
      {matches ? (
        <>
          <button onClick={() => setOpen(true)}>{children}</button>
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            direction="bottom"
            className="p-5 pt-3 rounded-none rounded-t-3xl max-w-[90%] m-auto"
          >
            <Separator className="w-10 h-1 m-auto bg-gray-500 rounded-lg " />
            <div className="flex justify-end">
              <X onClick={() => setOpen(false)} width={20} className="cursor-pointer" />
            </div>
            <div className="flex flex-col items-center gap-4 m-auto mb-6 ">
              {title && <p className="text-lg font-semibold">{title}</p>}
              {description && <p className="text-center">{description}</p>}
            </div>
            <ConfirmContent
              confirmText={confirmText}
              action={action}
              actionText={actionText}
              loading={loading}
              matches={matches}
              cancelText={cancelText}
              tipText={tipText}
              setOpen={setOpen}
            />
          </Drawer>
        </>
      ) : (
        <Dialog open={open}>
          {children && <DialogTrigger asChild>{children}</DialogTrigger>}
          <DialogContent
            className="sm:max-w-[425px] md:max-w-[570px] p-10 bg-white"
            cancel={() => setOpen(false)}
          >
            <DialogHeader className="flex flex-col items-center gap-4 m-auto mb-6 ">
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && (
                <DialogDescription className="text-center">{description}</DialogDescription>
              )}
            </DialogHeader>
            <ConfirmContent
              confirmText={confirmText}
              action={action}
              actionText={actionText}
              loading={loading}
              matches={matches}
              cancelText={cancelText}
              tipText={tipText}
              setOpen={setOpen}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ConfirmAction;
