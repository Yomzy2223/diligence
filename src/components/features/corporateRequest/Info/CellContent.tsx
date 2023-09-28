"use client";

import Image from "next/image";
import React from "react";
import { DeleteIcon, EditIcon } from "@/assets/icons";
import ConfirmAction from "../../dialog/confirmAction";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StatusReport from "../../dialog/statusReport";
import { useSession } from "next-auth/react";

interface propsType {
  request: any;
  openResult: boolean;
  setOpenResult: (arg: boolean) => void;
  clickedRequest: any;
  setClickedRequest: (arg: any) => void;
  openDeleteConfirm: boolean;
  setOpenDeleteConfirm: (arg: boolean) => void;
  isLoading: boolean;
  handleEdit: (arg: any) => void;
  handleDeleteRequest: (arg: any) => void;
  propStatus: string | undefined;
  openVerifyConfirm: boolean;
  setOpenVerifyConfirm: (arg: boolean) => void;
  handleVerifyRequest: (arg: boolean) => void;
  verifyLoading: boolean;
  userRole: string | undefined;
}

export const ActionCellContent = ({
  request,
  propStatus,
  openResult,
  setOpenResult,
  clickedRequest,
  setClickedRequest,
  openDeleteConfirm,
  setOpenDeleteConfirm,
  handleEdit,
  isLoading,
  handleDeleteRequest,
  openVerifyConfirm,
  setOpenVerifyConfirm,
  handleVerifyRequest,
  verifyLoading,
  userRole,
}: propsType) => {
  const status = request?.status?.toLowerCase();

  const handleSeeResult = () => {
    setClickedRequest(request);
    setOpenResult(true);
  };

  const handleVerifyConfirm = () => {
    setClickedRequest(request);
    setOpenVerifyConfirm(true);
  };

  const handleDeleteRequestConfirm = () => {
    setClickedRequest(request);
    setOpenDeleteConfirm(true);
  };

  if (status === "unverified") {
    return propStatus && (userRole === "manager" || userRole === "admin") ? (
      <div>
        <Button
          variant="ghost2"
          size="icon"
          onClick={handleVerifyConfirm}
          className="text-[#DE4A09] underline hover:text-[#de4909cf]"
        >
          Approve
        </Button>

        <ConfirmAction
          open={openVerifyConfirm}
          setOpen={setOpenVerifyConfirm}
          title="Confirm Verify"
          description={`Business name is "${request?.name}" and Registration Number is "${request?.registrationNumber}"`}
          actionText="Verify"
          action={() => handleVerifyRequest(clickedRequest)}
          loading={verifyLoading}
        />
      </div>
    ) : (
      <div className="flex items-center gap-6">
        <div>
          <Button variant="ghost2" size="icon" onClick={() => handleEdit(request)}>
            <Image src={EditIcon} alt="edit" className="w-4 h-4 cursor-pointer hidden md:block" />
          </Button>
          <Button
            variant="ghost2"
            size="link"
            className="underline text-foreground hover:text-foreground/90 md:hidden"
            onClick={() => handleEdit(request)}
          >
            Edit
          </Button>
        </div>

        <div>
          <Button variant="ghost2" size="icon">
            <Image
              src={DeleteIcon}
              alt="delete"
              className="w-4 h-4 cursor-pointer hidden md:block"
              onClick={handleDeleteRequestConfirm}
            />
          </Button>
          <Button
            variant="ghost2"
            size="link"
            className="underline text-destructive hover:text-destructive/90 md:hidden"
            onClick={handleDeleteRequestConfirm}
          >
            Delete
          </Button>
        </div>

        <ConfirmAction
          open={openDeleteConfirm}
          setOpen={setOpenDeleteConfirm}
          title="Delete Request"
          description={`Deleting will remove all the information from database. This cannot be undone."`}
          actionText="Delete"
          action={() => handleDeleteRequest(clickedRequest)}
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
        <Button
          variant="ghost2"
          size="icon"
          className="underline whitespace-nowrap text-[#de4909]  hover:text-[#de4909cf]"
          onClick={handleSeeResult}
        >
          See Result
        </Button>
        <StatusReport
          clickedRequest={clickedRequest}
          open={openResult}
          setOpenResult={setOpenResult}
        />
      </>
    );
  }

  //
  else return status;
};

export const Status = ({ status }: { status: string }) => {
  status = status.toLowerCase();
  const className = "px-2 py-1 rounded-lg text-center";

  if (status === "unverified")
    return <div className={cn(className, "bg-red-400/10")}>{status}</div>;

  if (status === "verified")
    return <div className={cn(className, "bg-green-500/10")}>{status}</div>;

  if (status === "completed")
    return <div className={cn(className, "bg-[#d400cd1d]")}>{status}</div>;
};
