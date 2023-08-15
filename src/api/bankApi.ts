import { bankBranchType } from "@/components/features/dialog/onboardBranch/constants";
import { client } from "@/lib/globalFunctions";

// BANK FUNCTIONS
// --------------------------------------------------------------------------------
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



//create manager

export const createDiligenceManager = async (adminId:string,formInfo:bankBranchType) => {
	return await client.post(`/diligence/manager/${adminId}`, formInfo);
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

// BANK BRANCH FUNCTIONS
// --------------------------------------------------------------------------------
// Function to create a branch
export const createBranch = (formInfo: any) => {
  return client.post(`/diligence/branch/${formInfo.bankId}`, formInfo);
};

// Function to update a branch
export const updateBranch = (formInfo: any) => {
  return client.post(``, formInfo);
};

// Function to delete a branch
export const deleteBranch = (formInfo: any) => {
  return client.post(``, formInfo);
};

// Function to view a branch
export const viewBranch = (formInfo: any) => {
  return client.post(`/diligence/branch/${formInfo.branchId}`, formInfo);
};

// Function to view all branches
export const viewAllBranches = (formInfo: any) => {
  return client.post(`/diligence/branches/${formInfo.branchId}`, formInfo);
};
