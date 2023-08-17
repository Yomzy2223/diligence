// BANK FUNCTIONS
// --------------------------------------------------------------------------------

import { client } from "@/lib/config";

// Function to create a bank
export const createBank = (formInfo: any) => {
  return client.post(`/diligence/bank`, formInfo);
};

// Function to update a bank
export const updateBank = (formInfo: any) => {
  return client.put(`/diligence/bank/${formInfo.bankId}`, formInfo);
};

// Function to delete a bank
export const deleteBank = (formInfo: any) => {
  return client.delete(`/diligence/bank/${formInfo.bankId}`, formInfo);
};

// Function to view a bank
export const viewBank = (formInfo: any) => {
  return client.get(`/diligence/bank/${formInfo.id}`);
};

// Function to view all banks
export const viewAllBanks = () => {
  return client.get(`/diligence/banks`);
};

// Function to view all nigeria banks
export const viewAllNigeriaBanks = () => {
  return client.get(`/diligence/nigerianbanks`);
};

export const viewEnterpriseByEmail = async (adminEmail: string) => {
  return await client.get(`/diligence/enterpriseByEmail/${adminEmail}`);
};

//
//
//
//

// BANK STAFF FUNCTIONS
// --------------------------------------------------------------------------------
// Function to create a Staff
export const createStaff = (formInfo: any) => {
  return client.post(`/diligence/createStaff`, formInfo);
};

// Function to update a Staff
export const updateStaff = (formInfo: any) => {
  return client.post(`/diligence/verify/${formInfo.id}`, formInfo);
};

// Function to delete a Staff
export const deleteStaff = (formInfo: any) => {
  return client.post(``, formInfo);
};

// Function to view a Staff
export const viewStaff = (formInfo: any) => {
  return client.post(`/diligence/staff/${formInfo.id}`, formInfo);
};

// Function to view all Staffs
export const viewAllStaff = (formInfo: any) => {
  return client.post(`/diligence//allStaffs/${formInfo.id}`, formInfo);
};

//
//
//
//

interface managerType {
  formInfo: {
    name: string;
    location: string;
    managerEmail: string;
  };
}

interface createBranchType extends managerType {
  adminId: string;
}
interface updateBranchType extends managerType {
  managerId: string;
}

// BANK BRANCH FUNCTIONS
// --------------------------------------------------------------------------------
// Function to create a branch
export const createBranch = ({ adminId, formInfo }: createBranchType) => {
  return client.post(`/diligence/manager/${adminId}`, formInfo);
};

// Function to update a branch
export const updateBranch = ({ managerId, formInfo }: updateBranchType) => {
  return client.put(`/diligence/manager/${managerId}`, formInfo);
};

// Function to delete a branch
export const deleteBranch = (managerId: string) => {
  return client.delete(`/diligence/manager/${managerId}`);
};

// Function to view a branch by enterprise id
export const viewBranchById = (managerId: string) => {
  return client.get(`/diligence/manager/${managerId}`);
};

// Function to view a branch by email address
export const viewBranchByEmail = (managerEmail: string) => {
  return client.get(`/diligence/managerByEmail/${managerEmail}`);
};

// Function to view all enterprise managers
export const viewEnterpriseManagers = (enterpriseId: string) => {
  return client.get(`/diligence/managers/${enterpriseId}`);
};
