import {
  createRequest,
  updateRequest,
  deleteRequest,
  verifyRequest,
  viewAllRequests,
  viewSingleRequest,
  viewRequestDocument,
  viewAllRequestDocuments,
} from "@/api/requestApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { useResponse } from "./useResponse";

// React Query hooks for corporate request
export const useRequests = () => {
  const { handleError, handleSuccess } = useResponse();

  const createRequestMutation = useMutation({
    mutationFn: createRequest,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const updateRequestMutation = useMutation({
    mutationFn: updateRequest,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const deleteRequestMutation = useMutation({
    mutationFn: deleteRequest,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  // const viewRequestQuery =(requestId: string)=> useQuery({
  //   queryKey: ["Single Request",],
  //   queryFn: ()=> viewSingleRequest(requestId),
  // });

  const viewAllRequestsQuery = useQuery({
    queryKey: ["All Requests"],
    queryFn: viewAllRequests,
  });

  const verifyRequestMutation = useMutation({
    mutationFn: verifyRequest,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  // const viewRequestDocumentQuery = useQuery({
  //   queryKey: ["Request Document"],
  //   queryFn:()=> viewRequestDocument,

  // });

  // const viewRequestsDocumentQuery = useQuery({
  //   queryKey: ["Request Documents"],
  //   queryFn:()=> viewAllRequestDocuments,
  // });

  return {
    createRequestMutation,
    updateRequestMutation,
    deleteRequestMutation,
    // viewRequestQuery,
    viewAllRequestsQuery,
    verifyRequestMutation,
    // viewRequestDocumentQuery,
    // viewRequestsDocumentQuery,
  };
};
