import {
  createBank,
  createStaff,
  deleteBank,
  deleteStaff,
  updateBank,
  updateStaff,
  viewAllBanks,
  viewAllNigeriaBanks,
  viewAllStaff,
  viewBank,
  viewStaff,
  createBranch,
  updateBranch,
  deleteBranch,
  viewBranchById,
  viewBranchByEmail,
  viewEnterpriseManagers,
} from "@/api/enterpriseApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useResponse } from "./useResponse";

// React Query hooks for bank
export const useBank = () => {
  const { handleError, handleSuccess } = useResponse();

  const createBankMutation = useMutation({
    mutationFn: createBank,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const updateBankMutation = useMutation({
    mutationFn: updateBank,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const deleteBankMutation = useMutation({
    mutationFn: deleteBank,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const viewBankMutation = useMutation({
    mutationFn: viewBank,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const viewAllBanksMutation = useMutation({
    mutationFn: viewAllBanks,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const viewAllNigeriaBankMutation = useMutation({
    mutationFn: viewAllNigeriaBanks,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  return {
    createBankMutation,
    createBank: createBankMutation.mutate,
    updateBankMutation,
    updateBank: updateBankMutation.mutate,
    deleteBankMutation,
    deleteBank: deleteBankMutation.mutate,
    viewBankMutation,
    viewBank: viewBankMutation.mutate,
    viewAllBanksMutation,
    viewAllBanks: viewAllBanksMutation.mutate,
    viewAllNigeriaBankMutation,
    viewAllNigeriaBanks: viewAllNigeriaBankMutation.mutate,
  };
};

//
//
//
//

// React Query hooks for bank staff
export const useBankStaff = () => {
  const { handleError, handleSuccess } = useResponse();

  const createStaffMutation = useMutation({
    mutationFn: createStaff,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const updateStaffMutation = useMutation({
    mutationFn: updateStaff,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const deleteStaffMutation = useMutation({
    mutationFn: deleteStaff,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const viewStaffMutation = useMutation({
    mutationFn: viewStaff,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const viewAllStaffMutation = useMutation({
    mutationFn: viewAllStaff,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  return {
    createStaffMutation,
    createStaff: createStaffMutation.mutate,
    updateStaffMutation,
    updateStaff: updateStaffMutation.mutate,
    deleteStaffMutation,
    deleteStaff: deleteStaffMutation.mutate,
    viewStaffMutation,
    viewStaff: viewStaffMutation.mutate,
    viewAllStaffMutation,
    viewAllStaff: viewAllStaffMutation.mutate,
  };
};

//
//
//
//

// React Query hooks for bank branch
export const useBankBranch = () => {
  const { handleError, handleSuccess } = useResponse();

  const createBranchMutation = useMutation({
    mutationFn: createBranch,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const updateManagerMutation = useMutation({
    mutationFn: updateBranch,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const deleteBranchMutation = useMutation({
    mutationFn: deleteBranch,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const useViewBranchByIdQuery = (branchId: string) =>
    useQuery({
      queryKey: ["View Branch"],
      queryFn: () => viewBranchById(branchId),
    });

  const useViewBranchByEmailQuery = (email: string) =>
    useQuery({
      queryKey: ["View Branch"],
      queryFn: () => viewBranchByEmail(email),
    });

  const viewEnterpriseManagersQuery = useQuery({
    queryKey: ["View All Enterprise"],
    queryFn: () => viewEnterpriseManagers,
  });

  return {
    createBranchMutation,
    updateManagerMutation,
    deleteBranchMutation,
    useViewBranchByIdQuery,
    useViewBranchByEmailQuery,
    viewEnterpriseManagersQuery,
  };
};
