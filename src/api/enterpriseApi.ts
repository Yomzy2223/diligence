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

interface createManagerType extends managerType {
  adminId: string;
}
interface updateManagerType extends managerType {
  managerId: string;
}

// BANK BRANCH FUNCTIONS
// --------------------------------------------------------------------------------
// Function to create a branch manager
export const createManager = ({ adminId, formInfo }: createManagerType) => {
  return client.post(`/diligence/manager/${adminId}`, formInfo);
};

// Function to update a branch manager
export const updateManager = ({ managerId, formInfo }: updateManagerType) => {
  return client.put(`/diligence/manager/${managerId}`, formInfo);
};

// Function to delete a branch manager
export const deleteManager = (managerId: string) => {
  return client.delete(`/diligence/manager/${managerId}`);
};

// Function to view a branch manager by id
export const viewManagerById = (managerId: string) => {
  return client.get(`/diligence/manager/${managerId}`);
};

// Function to view a branch manager by email address
export const viewManagerByEmail = (managerEmail: string) => {
  return client.get(`/diligence/managerByEmail/${managerEmail}`);
};

// Function to view all enterprise managers
export const viewAllEnterpriseManagers = (enterpriseId: string) => {
  return client.get(`/diligence/managers/${enterpriseId}`);
};
