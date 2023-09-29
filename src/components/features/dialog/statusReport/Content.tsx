import { FileDisplay } from "@/components/customdialog/fileDisplay";
import { useRequests } from "@/hooks/useRequests";
import { handleDownloadFile } from "@/lib/globalFunctions";
import { format } from "date-fns";
import React from "react";
import StatusReportSkeleton from "./StatusReportSkeleton";

const Content = ({ clickedRequest }: { clickedRequest: any }) => {
  const { useViewRequestDocumentQuery } = useRequests();
  const requestDocument = useViewRequestDocumentQuery(clickedRequest?.id);
  const reqDocumentInfo = requestDocument.data?.data?.data;

  const handleFileDownload = (document: any) => {
    if (document.link && document.name) handleDownloadFile(document.link, document.name);
  };

  return (
    <>
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
              {el?.description && (
                <div className="space-y-4 mt-8">
                  <p className="w-max">Note:</p>
                  <p className="p-4 border border-border rounded-sm text-foreground-label">
                    {el?.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};

export default Content;
