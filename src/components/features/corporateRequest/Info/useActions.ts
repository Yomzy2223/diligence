import { RequestContext } from "@/app/(dashboard)/(home)/layout";
import { useRequests } from "@/hooks/useRequests";
import { getTimeInfo } from "@/lib/utils";
import { format } from "date-fns";
import numeral from "numeral";
import { useContext, useEffect, useState } from "react";
import { ActionCellContent, Status } from "./CellContent";

export const useActions = ({ status }: { status?: string }) => {
  const [openResult, setOpenResult] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [openVerifyConfirm, setOpenVerifyConfirm] = useState(false);

  const reqContext = useContext(RequestContext);

  const { deleteRequestMutation, viewAllRequestsQuery, verifyRequestMutation } = useRequests();
  const { data, error, isError, isSuccess, isLoading, refetch } = viewAllRequestsQuery;

  status = status?.toLowerCase();
  let requests = data?.data?.data;
  if (status) requests = requests?.filter((el: any) => el?.status?.toLowerCase() === status);

  //
  useEffect(() => {
    if (deleteRequestMutation.isSuccess || deleteRequestMutation.isError) {
      refetch();
      setOpenDeleteConfirm(false);
    }
    if (verifyRequestMutation.isSuccess || verifyRequestMutation.isError) {
      refetch();
      setOpenVerifyConfirm(false);
    }
  }, [
    deleteRequestMutation.isSuccess,
    deleteRequestMutation.isError,
    verifyRequestMutation.isSuccess,
    verifyRequestMutation.isError,
  ]);

  useEffect(() => {
    refetch();
  }, [reqContext?.regState?.refetchData]);

  const normalize = (text: string) => text.trim().toLowerCase();
  const searchValue = normalize(reqContext?.regState?.searchValue || "");

  // Filter requests
  const filteredRequests = requests?.filter(
    (el: any) =>
      normalize(el?.createdBy)?.includes(searchValue) ||
      normalize(el?.name)?.includes(searchValue) ||
      el?.registrationNumber?.includes(reqContext?.regState?.searchValue) ||
      normalize(el?.status)?.includes(searchValue)
  );

  // Delete request
  const handleDeleteConfirm = (request: any) => {
    deleteRequestMutation.mutate(request.id);
  };

  // Verify request
  const handleVerifyConfirm = (request: any) => {
    verifyRequestMutation.mutate(request.id);
  };

  // Edit request
  const handleEdit = (request: any) => {
    reqContext?.setRegState({
      ...reqContext?.regState,
      requestId: request?.id,
      regNo: request?.registrationNumber,
      regName: request?.name,
    });
  };

  let headers = ["S/N", "Business Name", "Reg Number", "Requested by", "Date", "Status", "Action"];
  if (status) headers = headers.filter((el) => el !== "Status");

  const dataBody = filteredRequests?.map((request: any, id: number) => {
    const formattedDate = format(new Date(request?.createdAt), "dd/MM/yyyy");
    const formattedTime = getTimeInfo(request?.createdAt);

    const Action = ActionCellContent({
      request,
      propStatus: status,
      handleConfirm: handleDeleteConfirm,
      isLoading: deleteRequestMutation.isLoading,
      openDeleteConfirm: openDeleteConfirm,
      setOpenDeleteConfirm: setOpenDeleteConfirm,
      handleEdit,
      openResult: openResult,
      setOpenResult: setOpenResult,
      openVerifyConfirm: openVerifyConfirm,
      setOpenVerifyConfirm: setOpenVerifyConfirm,
      handleVerifyConfirm: handleVerifyConfirm,
      verifyLoading: verifyRequestMutation.isLoading,
    });

    const body = status
      ? [
          numeral(id + 1).format("00"),
          request?.name,
          request?.registrationNumber,
          request?.createdBy,
          formattedDate,
          // formattedTime,
          Action,
        ]
      : [
          numeral(id + 1).format("00"),
          request?.name,
          request?.registrationNumber,
          request?.createdBy,
          formattedDate,
          // formattedTime,
          Status({ status: request?.status }),
          Action,
        ];

    return body;
  });

  return { headers, dataBody, requests, isLoading };
};
