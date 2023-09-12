import React from "react";
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileDisplay } from "@/components/customdialog/fileDisplay";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useRequests } from "@/hooks/useRequests";
import { handleDownloadFile } from "@/lib/globalFunctions";
import StatusReportSkeleton from "./StatusReportSkeleton";

interface propType {
  clickedRequest: any;
  open: boolean;
  setOpenResult: any;
}

const StatusReport = ({ clickedRequest, open, setOpenResult }: propType) => {
  const { useViewRequestDocumentQuery } = useRequests();
  const requestDocument = useViewRequestDocumentQuery(clickedRequest?.id);
  const reqDocumentInfo = requestDocument.data?.data?.data;

  const handleFileDownload = (document: any) => {
    if (document.link && document.name) handleDownloadFile(document.link, document.name);
  };

  return (
    <DialogRoot open={open}>
      <DialogContent
        className="sm:max-w-[554px] p-6"
        showClose={true}
        cancel={() => setOpenResult(false)}
      >
        <DialogHeader className="space-y-[24px] mb-4">
          <DialogTitle className="text-2xl leading-[1.3] text-foreground-dark">
            Status Report
          </DialogTitle>
        </DialogHeader>

        {requestDocument.isLoading && <StatusReportSkeleton />}
        {!requestDocument.isLoading &&
          reqDocumentInfo?.map((el: any, i: number) => {
            const date = new Date(el?.createdAt);

            return (
              <div key={i}>
                <FileDisplay onDownloadClick={() => handleFileDownload(el)} type={el?.type}>
                  {el?.name || "--"}
                </FileDisplay>
                {el?.createdAt && (
                  <p className="bg-background-light w-max text-primary p-2 rounded-sm text-xs mt-4">
                    Uploaded at: {format(date, "h:mm a")} - {format(date, "dd MMM, yyyy")}
                  </p>
                )}
                <div className="space-y-4 mt-8">
                  <p className="w-max">Note:</p>
                  <p className="p-4 border border-border rounded-sm text-foreground-label">
                    {el?.description}
                  </p>
                </div>
              </div>
            );
          })}

        <DialogFooter className="mt-8">
          <Button type="submit" onClick={() => setOpenResult(false)}>
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default StatusReport;
