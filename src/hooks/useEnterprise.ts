import {
  createBranch,
  updateBranch,
  deleteBranch,
  viewBranchById,
  viewBranchByEmail,
  viewEnterpriseManagers,
  createStaff,
  deleteStaff,
  viewStaff,
  viewAllBranchStaff,
  updateEnterprise,
  viewEnterpriseById,
  viewEnterpriseByAdminEmail,
} from "@/api/enterpriseApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useResponse } from "./useResponse";

// React Query hooks for bank
export const useEnterprise = () => {
  const { handleError, handleSuccess } = useResponse();

  const updateEnterpriseMutation = useMutation({
    mutationFn: updateEnterprise,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  const viewEnterpriseByIdMutation = useMutation({
    mutationFn: viewEnterpriseById,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {},
    retry: 3,
  });

  const viewEnterpriseByAdminEmailMutation = useMutation({
    mutationFn: viewEnterpriseByAdminEmail,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  return {
    updateEnterpriseMutation,
    viewEnterpriseByIdMutation,
    viewEnterpriseByAdminEmailMutation,
  };
};

//
//
//
//

// React Query hooks for bank staff
export const useEnterpriseStaff = () => {
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

  const useViewAllBranchStaffQuery = (managerId: string) =>
    useQuery({
      queryKey: ["All Staff", managerId],
      queryFn: ({ queryKey }) => viewAllBranchStaff(queryKey[1]),
    });

  return {
    createStaffMutation,
    deleteStaffMutation,
    viewStaffMutation,
    viewAllBranchStaff,
    useViewAllBranchStaffQuery,
  };
};

//
//
//
//

// React Query hooks for bank branch
export const useEnterpriseBranch = () => {
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
