import {
  createRequest,
  updateRequest,
  deleteRequest,
  verifyRequest,
  viewSingleRequest,
  viewRequestDocument,
  viewAllRequestDocuments,
  viewBranchRequests,
} from "@/api/requestApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useResponse } from "./useResponse";

// React Query hooks for corporate request
export const useRequests = () => {
  const { handleError, handleSuccess } = useResponse();
  const queryClient = useQueryClient();

  const createRequestMutation = useMutation({
    mutationFn: createRequest,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
      queryClient.invalidateQueries({ queryKey: ["Branch Requests"] });
      queryClient.invalidateQueries({ queryKey: ["Enterprise"] });
    },
    retry: 3,
  });

  const updateRequestMutation = useMutation({
    mutationFn: updateRequest,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ["Branch Requests"] });
      queryClient.invalidateQueries({ queryKey: ["Enterprise"] });
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
      queryClient.invalidateQueries({ queryKey: ["Branch Requests"] });
      queryClient.invalidateQueries({ queryKey: ["Enterprise"] });
    },
    retry: 3,
  });

  // const viewRequestQuery =(requestId: string)=> useQuery({
  //   queryKey: ["Single Request",],
  //   queryFn: ()=> viewSingleRequest(requestId),
  // });

  const verifyRequestMutation = useMutation({
    mutationFn: verifyRequest,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
      queryClient.invalidateQueries({ queryKey: ["Branch Requests"] });
      queryClient.invalidateQueries({ queryKey: ["Enterprise"] });
    },
    retry: 3,
  });

  const useViewBranchRequests = (managerId: string) =>
    useQuery({
      queryKey: ["Branch Requests"],
      queryFn: () => viewBranchRequests(managerId),
      enabled: managerId ? true : false,
    });

  const useViewRequestDocumentQuery = (requestId: string) =>
    useQuery({
      queryKey: ["Request Document", requestId],
      queryFn: ({ queryKey }) => viewRequestDocument(queryKey[1]),
      enabled: requestId ? true : false,
    });

  // const viewRequestsDocumentQuery = useQuery({
  //   queryKey: ["Request Documents"],
  //   queryFn:()=> viewAllRequestDocuments,
  // });

  return {
    createRequestMutation,
    updateRequestMutation,
    deleteRequestMutation,
    // viewRequestQuery,
    verifyRequestMutation,
    useViewBranchRequests,
    useViewRequestDocumentQuery,
    // viewRequestsDocumentQuery,
  };
};
