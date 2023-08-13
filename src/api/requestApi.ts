import { client } from "@/lib/config";

// CORPORATE REQUEST FUNCTIONS
// --------------------------------------------------------------------------------

// Function to create a request
export const createRequest = (formInfo: any) => {
  return client.post("/diligence/request", formInfo);
};

// Function to update a request
export const updateRequest = (formInfo: any) => {
  return client.put(`/diligence/request/update/${formInfo.id}`, formInfo);
};

// Function to delete a request
export const deleteRequest = (formInfo: any) => {
  return client.delete(`/diligence/request/${formInfo.id}`, formInfo);
};

// Function to view a request
export const viewSingleRequest = (formInfo: any) => {
  return client.get("", formInfo);
};

// Function to view all requests
export const viewAllRequests = () => {
  return client.get("/diligence/allRequests");
};

// Function to verify a request
export const verifyRequest = (formInfo: any) => {
  return client.put(`/diligence/request/verify/${formInfo.reqNumber}`, formInfo);
};

// Function to add request document
export const addRequestDocument = (formInfo: any) => {
  return client.post(`/diligence/document/${formInfo.reqNumber}`, formInfo);
};

// Function to delete request document
export const deleteRequestDocument = (formInfo: any) => {
  return client.delete(`/diligence/deleteDocument/${formInfo.reqNumber}`, formInfo);
};
