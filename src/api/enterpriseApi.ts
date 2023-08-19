// BANK FUNCTIONS
// --------------------------------------------------------------------------------

import { client } from "@/lib/config";

interface updateType {
  name: string;
  address: string;
  adminEmail: string;
  logo: string;
  color: string;
}

// Function to update an enterprise
export const updateEnterprise = ({
  enterpriseId,
  formInfo,
}: {
  enterpriseId: string;
  formInfo: updateType;
}) => {
  return client.put(`/diligence/enterprise/${enterpriseId}`, formInfo);
};

// Function to view an enterprise by entrprise id
export const viewEnterpriseById = (enterpriseId: string) => {
  return client.get(`/diligence/enterprise/${enterpriseId}`);
};

// Function to view an enterprise by admin email
export const viewEnterpriseByAdminEmail = (adminEmail: string) => {
  return client.get(`/diligence/enterpriseByEmail/${adminEmail}`);
};

//
//
//
//

interface createStaffType {
  managerId: string;
  formInfo: { email: string };
}

// BANK STAFF FUNCTIONS
// --------------------------------------------------------------------------------
// Function to create a Staff
export const createStaff = ({ managerId, formInfo }: createStaffType) => {
  return client.post(`/diligence/staff/${managerId}`, formInfo);
};

// Function to delete a Staff
export const deleteStaff = (staffId: string) => {
  return client.delete(`/diligence/staff/${staffId}`);
};

// Function to view a Staff
export const viewStaff = (staffId: string) => {
  return client.get(`/diligence/staff/${staffId}`);
};

// Function to view all Staffs
export const viewAllBranchStaff = (managerId: string) => {
  return client.get(`/diligence/staffs/${managerId}`);
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
