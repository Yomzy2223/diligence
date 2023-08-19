"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "@/assets/icons";
import ConfirmAction from "../../dialog/confirmAction";
import Dialog from "@/components/customdialog";
import { FileDisplay } from "@/components/customdialog/fileDisplay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface propsType {
  request: any;
  openResult: boolean;
  setOpenResult: (arg: boolean) => void;
  openDeleteConfirm: boolean;
  setOpenDeleteConfirm: (arg: boolean) => void;
  isLoading: boolean;
  handleEdit: (arg: any) => void;
  handleConfirm: (arg: any) => void;
}

export const ActionCellContent = ({
  request,
  openResult,
  setOpenResult,
  openDeleteConfirm,
  setOpenDeleteConfirm,
  handleEdit,
  isLoading,
  handleConfirm,
}: propsType) => {
  //

  const status = request?.status?.toLowerCase();

  if (status === "unverified") {
    return (
      <div className="flex items-center gap-6">
        <Button variant="ghost2" size="icon" onClick={() => handleEdit(request)}>
          <Image src={EditIcon} alt="edit" className="w-4 h-4 cursor-pointer" />
        </Button>
        <Button variant="ghost2" size="icon">
          <Image
            src={DeleteIcon}
            alt="delete"
            className="w-4 h-4 cursor-pointer"
            onClick={() => setOpenDeleteConfirm(true)}
          />
        </Button>
        <ConfirmAction
          open={openDeleteConfirm}
          setOpen={setOpenDeleteConfirm}
          title="Delete Request"
          description={`Deleting will remove all the information from database. This cannot be undone."`}
          actionText="Delete"
          action={() => handleConfirm(request)}
          loading={isLoading}
        />
      </div>
    );
  }

  //
  else if (status === "verified") {
    return <u className="text-yellow-600">In Progress</u>;
  }

  //
  else if (status === "completed") {
    return (
      <>
        <div
          className="text-success cursor-pointer underline whitespace-nowrap"
          onClick={() => setOpenResult(true)}
        >
          See Result
        </div>
        <div>
          <Dialog
            open={openResult}
            cancel={() => setOpenResult(false)}
            dialogType="state"
            title="Verification succeessful"
            description={`Your request has been verified successfully`}
            brandColor="red"
            footer={false}
          >
            <FileDisplay>CAC Certificate</FileDisplay>
          </Dialog>
        </div>
      </>
    );
  }

  //
  else return status;
};

export const Status = ({ status }: { status: string }) => {
  status = status.toLowerCase();
  const className = "capitalize px-2 py-1 rounded-lg text-center";

  if (status === "unverified")
    return <div className={cn(className, "bg-red-400/10")}>{status}</div>;

  if (status === "verified")
    return <div className={cn(className, "bg-yellow-500/10")}>{status}</div>;

  if (status === "completed")
    return <div className={cn(className, "bg-green-500/10")}>{status}</div>;
};
