import {
  addRequestDocument,
  createRequest,
  deleteRequest,
  deleteRequestDocument,
  updateRequest,
  verifyRequest,
  viewAllRequests,
  viewSingleRequest,
} from "@/api/requestApi";
import { handleError, handleSuccess } from "@/lib/globalFunctions";
import { useMutation } from "@tanstack/react-query";

// React Query hooks for corporate request
export const useAuth = () => {
  const createRequestMutation = useMutation({
    mutationFn: createRequest,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const updateRequestMutation = useMutation({
    mutationFn: updateRequest,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const deleteRequestMutation = useMutation({
    mutationFn: deleteRequest,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewRequestMutation = useMutation({
    mutationFn: viewSingleRequest,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewAllRequestsMutation = useMutation({
    mutationFn: viewAllRequests,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const verifyRequestMutation = useMutation({
    mutationFn: verifyRequest,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const addRequestDocumentMutation = useMutation({
    mutationFn: addRequestDocument,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const deleteRequestDocumentMutation = useMutation({
    mutationFn: deleteRequestDocument,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  return {
    createRequestMutation,
    createRequest: createRequestMutation.mutate,
    updateRequestMutation,
    updateRequest: updateRequestMutation.mutate,
    deleteRequestMutation,
    deleteRequest: deleteRequestMutation.mutate,
    viewRequestMutation,
    viewSingleRequest: viewRequestMutation.mutate,
    viewAllRequestsMutation,
    viewAllRequests: viewAllRequestsMutation.mutate,
    verifyRequestMutation,
    verifyRequest: verifyRequestMutation.mutate,
    addRequestDocumentMutation,
    addRequestDocument: addRequestDocumentMutation.mutate,
    deleteRequestDocumentMutation,
    deleteRequestDocument: deleteRequestDocumentMutation.mutate,
  };
};
