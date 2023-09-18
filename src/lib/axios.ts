import axios from "axios";

export const Client = async () => {
  // can now fetch token from here
  return axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://iapkmjspxh.us-east-1.awsapprunner.com/"
        : "https://h2rwx2fbhm.us-east-1.awsapprunner.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer `,
    },
  });
};
