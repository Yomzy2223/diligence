import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";
import { getRegNumberInfo } from "@/lib/globalFunctions";
import { useRequestStore } from "@/store/requestStore";
import { compareAsc, format } from "date-fns";
import { useSession } from "next-auth/react";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { ActionCellContent, Status } from "./CellContent";

interface actionArgsType {
  data: any;
  // requestDocument: any;
  enterprise: any;
  deleteRequestMutation: any;
  verifyRequestMutation: any;
  // setClickedRequest: any;
  status: string | undefined;
}

export const useActions = ({
  data,
  // requestDocument,
  enterprise,
  deleteRequestMutation,
  verifyRequestMutation,
  // setClickedRequest,
  status,
}: actionArgsType) => {
  const [openResult, setOpenResult] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [openVerifyConfirm, setOpenVerifyConfirm] = useState(false);
  const [clickedRequest, setClickedRequest] = useState({ id: "" });
  const { setQuery } = useGlobalFucntions();

  // Fron request store
  const { searchValue, setRequestId, setRegName, setRegNo, setRegType } = useRequestStore();

  const session = useSession();
  const userRole = session.data?.user.role.toLowerCase();

  // Enterprise and branch requests
  const enterpriseInfo = enterprise.data?.data?.data;
  const enterpriseRequests = enterpriseInfo?.diligenceRequest;
  const branchRequests = data?.data?.data;

  // Filter requests by status clicked
  status = status?.toLowerCase();
  let requests = userRole === "admin" ? enterpriseRequests : branchRequests;
  if (status) requests = requests?.filter((el: any) => el?.status?.toLowerCase() === status);

  // Close diolog and refetch a request is created and deleted
  useEffect(() => {
    if (deleteRequestMutation.isSuccess || deleteRequestMutation.isError) {
      setOpenDeleteConfirm(false);
    }
    if (verifyRequestMutation.isSuccess || verifyRequestMutation.isError) {
      setOpenVerifyConfirm(false);
    }
  }, [
    deleteRequestMutation.isSuccess,
    deleteRequestMutation.isError,
    verifyRequestMutation.isSuccess,
    verifyRequestMutation.isError,
  ]);

  const normalize = (text: string) => text.trim().toLowerCase();

  // Filter requests
  let filteredRequests = requests?.filter(
    (el: any) =>
      normalize(el?.createdBy)?.includes(searchValue) ||
      normalize(el?.name)?.includes(searchValue) ||
      el?.registrationNumber?.includes(searchValue) ||
      normalize(el?.status)?.includes(searchValue)
  );

  filteredRequests?.sort((a: any, b: any) =>
    compareAsc(new Date(b?.createdAt), new Date(a?.createdAt))
  );

  // Set new offset when searching
  useEffect(() => {
    if (searchValue) setQuery("itemOffset", 0);
  }, [searchValue]);

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
    const regNumberInfo = getRegNumberInfo(request?.registrationNumber);

    setRequestId(request?.id);
    setRegName(request?.name);
    setRegNo(regNumberInfo.number);
    setRegType(regNumberInfo.type);
  };

  // Requests table header
  let headers = ["S/N", "Business Name", "Reg Number", "Requested by", "Date", "Status", "Action"];
  if (status) headers = headers.filter((el) => el !== "Status");

  // Requests table body
  const dataBody = filteredRequests?.map((request: any, id: number) => {
    const formattedDate = format(new Date(request?.createdAt), "dd/MM/yyyy");

    const Action = ActionCellContent({
      request,
      propStatus: status,
      handleConfirm: handleDeleteConfirm,
      isLoading: deleteRequestMutation.isLoading,
      openDeleteConfirm,
      setOpenDeleteConfirm,
      handleEdit,
      openResult,
      setOpenResult,
      clickedRequest,
      setClickedRequest,
      openVerifyConfirm,
      setOpenVerifyConfirm,
      handleVerifyConfirm,
      verifyLoading: verifyRequestMutation.isLoading,
      userRole,
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

  return { headers, dataBody, requests };
};
