import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export type IdialogProps = {
  dialogType: "state" | "normal";
  showCloseButton?: boolean;
  title: string;
  description?: string;
  action: () => void;
  children?: ReactNode;
  actionText?: string;
  brandColor?: string;
  triggerText?: string;
} & (
  | { dialogType: "state"; open: boolean; cancel: () => void }
  | { dialogType: "normal" }
);

export const Dialog = (props: IdialogProps) => {
  return (
    <>
      {props.dialogType === "normal" && (
        <DialogRoot>
          <DialogTrigger>
            <Button color={props.brandColor}>{props.triggerText}</Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[554px] p-6"
            showClose={props.showCloseButton}
          >
            <DialogHeader className="space-y-[24px] mb-4">
              <DialogTitle className="text-2xl leading-[1.3] text-foreground">
                {props.title}
              </DialogTitle>
              <DialogDescription className="text-lg leading-[1.3]">
                {props.description}
              </DialogDescription>
            </DialogHeader>
            {props.children}
            <DialogFooter className="mt-8">
              <DialogClose>
                <Button
                  type="submit"
                  color={props.brandColor}
                  onClick={props.action}
                >
                  {props.actionText}
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      )}
      {props.dialogType === "state" && (
        <DialogRoot open={props.open}>
          <DialogContent
            className="sm:max-w-[554px] p-6"
            showClose={props.showCloseButton}
            cancel={props.cancel}
          >
            <DialogHeader className="space-y-[24px] mb-4">
              <DialogTitle className="text-2xl leading-[1.3]">
                {props.title}
              </DialogTitle>
              <DialogDescription className="text-lg leading-[1.3]">
                {props.description}
              </DialogDescription>
            </DialogHeader>
            {props.children}
            <DialogFooter className="mt-8">
              <Button
                type="submit"
                color={props.brandColor}
                onClick={() => {
                  props.action();
                  props.cancel();
                }}
              >
                {props.actionText}
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      )}
    </>
  );
};

export default Dialog;
