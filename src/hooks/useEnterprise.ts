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

  const useViewEnterpriseByIdMutation = (enterpriseId: string) =>
    useQuery({
      queryKey: ["Enterprise", enterpriseId],
      queryFn: ({ queryKey }) => viewEnterpriseById(queryKey[1]),
    });

  const useViewEnterpriseByAdminEmailMutation = (adminEmail: string) =>
    useQuery({
      queryKey: ["Enterprise", adminEmail],
      queryFn: ({ queryKey }) => viewEnterpriseByAdminEmail(queryKey[1]),
    });

  return {
    updateEnterpriseMutation,
    useViewEnterpriseByIdMutation,
    useViewEnterpriseByAdminEmailMutation,
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

  const updateBranchMutation = useMutation({
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

  const useViewBranchByIdQuery = (managerId: string) =>
    useQuery({
      queryKey: ["View Branch"],
      queryFn: () => viewBranchById(managerId),
      enabled: managerId ? true : false,
    });

  const useViewBranchByEmailQuery = (managerEmail: string) =>
    useQuery({
      queryKey: ["View Branch"],
      queryFn: () => viewBranchByEmail(managerEmail),
    });

  const viewEnterpriseManagersQuery = useQuery({
    queryKey: ["View All Enterprise"],
    queryFn: () => viewEnterpriseManagers,
  });

  return {
    createBranchMutation,
    updateBranchMutation,
    deleteBranchMutation,
    useViewBranchByIdQuery,
    useViewBranchByEmailQuery,
    viewEnterpriseManagersQuery,
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
