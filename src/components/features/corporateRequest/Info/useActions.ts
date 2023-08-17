import { RequestContext } from "@/app/(dashboard)/(home)/layout";
import { useRequests } from "@/hooks/useRequests";
import { getTimeInfo } from "@/lib/utils";
import { format } from "date-fns";
import numeral from "numeral";
import { useContext, useEffect, useState } from "react";
import ActionCellContent from "./ActionCellContent";

// interface CorporateRequest {
//   id: number;
//   name: string;
//   registrationNumber: string;
//   status: string;
//   createdAt: string;
//   createdBy: string;
//   document?: string;
// }

export const useActions = () => {
  const [openResult, setOpenResult] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  const { deleteRequestMutation, viewAllRequestsQuery } = useRequests();
  const { data, error, isError, isSuccess, isLoading, refetch } = viewAllRequestsQuery;
  const requests = data?.data?.data;

  const reqContext = useContext(RequestContext);

  //
  useEffect(() => {
    if (deleteRequestMutation.isSuccess || deleteRequestMutation.isError) {
      refetch();
      setOpenDeleteConfirm(false);
    }
  }, [deleteRequestMutation.isSuccess, deleteRequestMutation.isError]);

  // Delete request
  const handleDeleteConfirm = (request: any) => {
    console.log(request);
    deleteRequestMutation.mutate(request.id);
  };

  //   Edit request
  const handleEdit = (request: any) => {
    reqContext?.setRegInfo({
      regNo: request?.registrationNumber,
      regName: request?.name,
    });
  };

  const headers = [
    "S/N",
    "Business Name",
    "Reg Number",
    "Requested by",
    "Date",
    "Status",
    "Action",
  ];

  const dataBody = requests?.map((request: any, id: number) => {
    const formattedDate = format(new Date(request?.createdAt), "dd/MM/yyyy");
    const formattedTime = getTimeInfo(request?.createdAt);

    return [
      numeral(id + 1).format("00"),
      request?.name,
      request?.registrationNumber,
      request?.createdBy,
      formattedDate,
      // formattedTime,
      request?.status,
      ActionCellContent({
        request,
        handleConfirm: handleDeleteConfirm,
        isLoading: deleteRequestMutation.isLoading,
        openDeleteConfirm: openDeleteConfirm,
        setOpenDeleteConfirm: setOpenDeleteConfirm,
        handleEdit,
        openResult: openResult,
        setOpenResult: setOpenResult,
      }),
    ];
  });

  return { headers, dataBody, requests, isLoading };
};
