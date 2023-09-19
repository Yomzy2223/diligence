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
  viewBranchStaff,
  updateEnterprise,
  viewEnterpriseById,
  viewEnterpriseByAdminEmail,
  viewStaffWithRequests,
} from "@/api/enterpriseApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useResponse } from "./useResponse";

/*
Enterprise hook

Code Explanation: The useEnterprise function returns a set of React Query hooks and mutations for managing enterprise data. It includes hooks for querying and mutating enterprise data, as well as handling errors and successes.
*/
export const useEnterprise = () => {
  const { handleError, handleSuccess } = useResponse();
  const queryClient = useQueryClient();
  const updateEnterpriseMutation = useMutation({
    mutationFn: updateEnterprise,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
      queryClient.invalidateQueries({ queryKey: ["Enterprise"] });
    },
    retry: 3,
  });

  const useViewEnterpriseByIdQuery = (enterpriseId: string) =>
    useQuery({
      queryKey: ["Enterprise", enterpriseId],
      queryFn: ({ queryKey }) => viewEnterpriseById(queryKey[1]),
      enabled: !!enterpriseId,
    });

  const useViewEnterpriseByAdminEmailQuery = (adminEmail: string) =>
    useQuery({
      queryKey: ["Enterprise", adminEmail],
      queryFn: ({ queryKey }) => viewEnterpriseByAdminEmail(queryKey[1]),
    });

  return {
    updateEnterpriseMutation, // - A mutation hook for updating enterprise data.
    useViewEnterpriseByIdQuery, // - A query hook for querying enterprise data by ID.
    useViewEnterpriseByAdminEmailQuery, // - A query hook for querying enterprise data by admin email.
  };
};

//
//
//
//

/*
Enterprise branch hook

 Code Explanation: This code defines a custom hook named useEnterpriseBranch that returns an object with several properties and functions related to managing branches of an enterprise. 
 */
export const useEnterpriseBranch = () => {
  const { handleError, handleSuccess } = useResponse();
  const queryClient = useQueryClient();

  const createBranchMutation = useMutation({
    mutationFn: createBranch,
    onError(error, variables, context) {
      handleError({ error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
      queryClient.invalidateQueries({ queryKey: ["Enterprise"] });
      queryClient.invalidateQueries({ queryKey: ["View Branch"] });
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
      queryClient.invalidateQueries({ queryKey: ["Enterprise"] });
      queryClient.invalidateQueries({ queryKey: ["View Branch"] });
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
      queryClient.invalidateQueries({ queryKey: ["Enterprise"] });
      queryClient.invalidateQueries({ queryKey: ["View Branch"] });
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
    queryKey: ["Enterprise Managers"],
    queryFn: () => viewEnterpriseManagers,
  });

  return {
    createBranchMutation, // - A mutation function for creating a new branch.
    updateBranchMutation, //  - A mutation function for updating an existing branch.
    deleteBranchMutation, // - A mutation function for deleting a branch.
    useViewBranchByIdQuery, // - A query function for fetching branch information by manager ID.
    useViewBranchByEmailQuery, // - A query function for fetching branch information by manager email.
    viewEnterpriseManagersQuery, // - A query function for fetching all managers of an enterprise.
  };
};

//
//
//
//

/*
Enterprise Staff hook

Summnary: This code defines a custom hook named useEnterpriseStaff that provides React Query hooks for managing bank staff in an enterprise application.
*/
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

  const useViewBranchStaffQuery = (managerId: string) =>
    useQuery({
      queryKey: ["All Staff", managerId],
      queryFn: ({ queryKey }) => viewBranchStaff(queryKey[1]),
    });

  const useViewStaffWithRequestsQuery = (managerId: string) =>
    useQuery({
      queryKey: ["Staff With Requests", managerId],
      queryFn: ({ queryKey }) => viewStaffWithRequests(queryKey[1]),
    });

  return {
    createStaffMutation, // - A mutation hook for creating a new staff member.
    deleteStaffMutation, // - A mutation hook for deleting a staff member.
    viewStaffMutation, // - A mutation hook for viewing a staff member.
    viewBranchStaff, // - A function for fetching all staff members for a given manager.
    useViewBranchStaffQuery, // - A function for using the useQuery hook to fetch all staff members for a given manager.
    useViewStaffWithRequestsQuery, // - A function for using the useQuery hook to fetch all staff members with requests for a given manager.
  };
};
