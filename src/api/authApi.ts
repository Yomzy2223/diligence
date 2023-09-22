import { client } from "@/lib/config";
import { setColor } from "@/lib/globalFunctions";
// CORPORATE REQUEST FUNCTIONS
// --------------------------------------------------------------------------------

interface signInType {
  email: string;
  password: string;
}

interface signUpType extends signInType {
  firstName: string;
  lastName: string;
}

// Function to sign in
export const signIn = async (formInfo: signInType) => {
  const loginResponse = await client.post("/diligence/user/login", formInfo);
  const enterpriseId = loginResponse?.data?.data?.enterpriseId;
  if (enterpriseId) {
    const enterpriseResponse = await client.get(`/diligence/enterprise/${enterpriseId}`);
    localStorage.setItem("enterpriseInfo", JSON.stringify(enterpriseResponse?.data));
    setColor(enterpriseResponse?.data?.data?.color || "194 100% 42%");
  }
  return loginResponse;
};

// Function to sign up
export const signUp = async (formInfo: signUpType) => {
  const signUpResponse = await client.post("/diligence/user", formInfo);
  const enterpriseId = signUpResponse?.data?.data?.enterpriseId;
  if (enterpriseId) {
    const enterpriseResponse = await client.get(`/diligence/enterprise/${enterpriseId}`);
    localStorage.setItem("enterpriseInfo", JSON.stringify(enterpriseResponse?.data));
    setColor(enterpriseResponse?.data?.data?.color || "194 100% 42%");
  }
  return signUpResponse;
};

// Function to forgot password
export const forgotPassword = (formInfo: { email: string }) => {
  return client.post("/diligence/user/forgotpassword", formInfo);
};

// Function to change password
export const changePassword = (formInfo: { password: string; token: string }) => {
  return client.post("/diligence/user/resetPassword", formInfo);
};
