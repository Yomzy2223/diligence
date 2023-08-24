import { client } from "@/lib/config";
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
  return await client.post("/diligence/user/login", formInfo);
};

// Function to sign up
export const signUp = async (formInfo: signUpType) => {
  return await client.post("/diligence/user", formInfo);
};

// Function to forgot password
export const forgotPassword = (formInfo: any) => {
  return client.post("/diligence/user/forgotpassword", formInfo);
};

// Function to change password
export const changePassword = (formInfo: any) => {
  return client.post("/diligence/user/resetPassword", formInfo);
};
