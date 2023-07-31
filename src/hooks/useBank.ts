import {
  createBank,
  createBranch,
  createStaff,
  deleteBank,
  deleteBranch,
  deleteStaff,
  updateBank,
  updateBranch,
  updateStaff,
  viewAllBanks,
  viewAllBranches,
  viewAllNigeriaBanks,
  viewAllStaff,
  viewBank,
  viewBranch,
  viewStaff,
} from "@/api/bankApi";
import { handleError, handleSuccess } from "@/lib/globalFunctions";
import { useMutation } from "@tanstack/react-query";

// React Query hooks for bank
export const useBank = () => {
  const createBankMutation = useMutation({
    mutationFn: createBank,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const updateBankMutation = useMutation({
    mutationFn: updateBank,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const deleteBankMutation = useMutation({
    mutationFn: deleteBank,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewBankMutation = useMutation({
    mutationFn: viewBank,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewAllBanksMutation = useMutation({
    mutationFn: viewAllBanks,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewAllNigeriaBankMutation = useMutation({
    mutationFn: viewAllNigeriaBanks,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
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
  const createStaffMutation = useMutation({
    mutationFn: createStaff,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const updateStaffMutation = useMutation({
    mutationFn: updateStaff,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const deleteStaffMutation = useMutation({
    mutationFn: deleteStaff,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewStaffMutation = useMutation({
    mutationFn: viewStaff,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewAllStaffMutation = useMutation({
    mutationFn: viewAllStaff,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
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
  const createBranchMutation = useMutation({
    mutationFn: createBranch,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const updateBranchMutation = useMutation({
    mutationFn: updateBranch,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const deleteBranchMutation = useMutation({
    mutationFn: deleteBranch,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewBranchMutation = useMutation({
    mutationFn: viewBranch,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewAllBranchesMutation = useMutation({
    mutationFn: viewAllBranches,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
    },
    retry: 3,
  });

  return {
    createBranchMutation,
    createBranch: createBranchMutation.mutate,
    updateBranchMutation,
    updateBranch: updateBranchMutation.mutate,
    deleteBranchMutation,
    deleteBranch: deleteBranchMutation.mutate,
    viewBranchMutation,
    viewBranch: viewBranchMutation.mutate,
    viewAllBranchesMutation,
    viewAllBranches: viewAllBranchesMutation.mutate,
  };
};
