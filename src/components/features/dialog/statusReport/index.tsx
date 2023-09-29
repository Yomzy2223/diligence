import React from "react";
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Content from "./Content";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

interface propType {
  clickedRequest: any;
  open: boolean;
  setOpenResult: any;
}

const StatusReport = ({ clickedRequest, open, setOpenResult }: propType) => {
  const matches = matchMedia("(max-width: 767px)").matches;

  return (
    <>
      {matches ? (
        <Drawer
          open={open}
          onClose={() => setOpenResult(false)}
          direction="bottom"
          className="p-5 pt-3 rounded-none rounded-t-3xl max-w-[90%] !h-max m-auto z-50"
        >
          <Separator className="w-10 h-1 m-auto bg-gray-500 rounded-lg " />
          <div className="flex justify-end">
            <X onClick={() => setOpenResult(false)} width={20} className="cursor-pointer" />
          </div>
          <p className="text-lg font-semibold">Status report</p>
          <Content clickedRequest={clickedRequest} />
          <Button size="full" onClick={() => setOpenResult(false)}>
            Ok
          </Button>
        </Drawer>
      ) : (
        <DialogRoot open={open}>
          <DialogContent
            className="sm:max-w-[554px] p-6"
            showClose={true}
            cancel={() => setOpenResult(false)}
          >
            <DialogHeader className="space-y-[24px] mb-4">
              <DialogTitle className="text-2xl">Status Report</DialogTitle>
            </DialogHeader>

            <Content clickedRequest={clickedRequest} />

            <DialogFooter className="mt-8">
              <Button type="submit" onClick={() => setOpenResult(false)}>
                Done
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      )}
    </>
  );
};

export default StatusReport;
