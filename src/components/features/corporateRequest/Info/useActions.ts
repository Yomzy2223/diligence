import { useEnterprise } from "@/hooks/useEnterprise";
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";
import { useRequests } from "@/hooks/useRequests";
import { getRegNumberInfo, getUserInfo, handleDownloadFile } from "@/lib/globalFunctions";
import { getTimeInfo } from "@/lib/utils";
import { useRequestStore } from "@/store/requestStore";
import { compareAsc, format } from "date-fns";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { ActionCellContent, Status } from "./CellContent";

export const useActions = ({ status }: { status?: string }) => {
  const [openResult, setOpenResult] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [openVerifyConfirm, setOpenVerifyConfirm] = useState(false);
  const [clickedRequest, setClickedRequest] = useState({ id: "" });
  const { setQuery } = useGlobalFucntions();

  // Fron request store
  const { refetchData, searchValue, setRequestId, setRegName, setRegNo, setRegType } =
    useRequestStore();

  const userInfo = getUserInfo()?.data;
  const role = userInfo?.role?.toLowerCase();

  const branchPayload = {
    managerEmail: userInfo?.managerEmail || userInfo?.email,
    managerId: userInfo?.managerId,
  };

  // API calls
  const {
    deleteRequestMutation,
    useViewBranchRequests,
    verifyRequestMutation,
    useViewRequestDocumentQuery,
  } = useRequests();
  const { data, isLoading, refetch } = useViewBranchRequests(branchPayload);
  const requestDocument = useViewRequestDocumentQuery(clickedRequest?.id);
  const { useViewEnterpriseByIdQuery } = useEnterprise();
  const enterprise = useViewEnterpriseByIdQuery(userInfo?.enterpriseId);

  // Enterprise and branch requests
  const enterpriseInfo = enterprise.data?.data?.data;
  const enterpriseRequests = enterpriseInfo?.diligenceRequest;
  const branchRequests = data?.data?.data;

  // Filter requests by status clicked
  status = status?.toLowerCase();
  let requests = role === "admin" ? enterpriseRequests : branchRequests;
  if (status) requests = requests?.filter((el: any) => el?.status?.toLowerCase() === status);

  // Close diolog and refetch a request is created and deleted
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
  }, [refetchData]);

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

  const handleFileDownload = (document: any) => {
    if (document.link && document.name) handleDownloadFile(document.link, document.name);
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
    const formattedTime = getTimeInfo(request?.createdAt);

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
      setClickedRequest,
      requestDocument,
      handleFileDownload,
      openVerifyConfirm,
      setOpenVerifyConfirm,
      handleVerifyConfirm,
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

  return { headers, dataBody, requests, isLoading: isLoading || enterprise.isLoading };
};