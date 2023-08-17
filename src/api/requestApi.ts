import { client } from "@/lib/config";

interface createType {
  name: string;
  registrationNumber: string;
  email: string;
  enterpriseId: string;
}
interface updateType {
  requestId: string;
  formInfo: createType;
}

interface createDocumentType {
  name: string;
  description: string;
  link: string;
  type: string;
}

// CORPORATE REQUEST FUNCTIONS
// --------------------------------------------------------------------------------

// Function to create a request
export const createRequest = async (formInfo: createType) => {
  return await client.post("/diligence/request", formInfo);
};

// Function to update a request
export const updateRequest = ({ requestId, formInfo }: updateType) => {
  return client.put(`/diligence/request/update/${requestId}`, formInfo);
};

// Function to delete a request
export const deleteRequest = (requestId: string) => {
  return client.delete(`/diligence/request/${requestId}`);
};

// Function to view a request
export const viewSingleRequest = (requestId: string) => {
  return client.get(`/diligence/request/${requestId}`);
};

// Function to view all requests
export const viewAllRequests = () => {
  return client.get("/diligence/request");
};

// Function to verify a request
export const verifyRequest = (requestId: string) => {
  return client.put(`/diligence/request/verify/${requestId}`);
};

// Function to view single request document
export const viewRequestDocument = (documentId: string) => {
  return client.get(`/diligence/document/${documentId}`);
};

// Function to view all request documents
export const viewAllRequestDocuments = (requestId: string) => {
  return client.get(`/diligence/document/${requestId}`);
};


