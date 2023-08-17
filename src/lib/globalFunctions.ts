import axios from "axios";

export const getAllYearsUpToCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;

  const allYears = [];
  for (let year = startYear; year <= currentYear; year++) {
    allYears.push(year.toString());
  }

  return allYears;
};

export const handleError = (error: any) => {
  console.log(error);
};

export const handleSuccess = (data: any) => {
  console.log(data);
};



export const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://iapkmjspxh.us-east-1.awsapprunner.com/"
      : "https://h2rwx2fbhm.us-east-1.awsapprunner.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhMTBmMTQ5LTVkNGMtNGQzNC1iN2ZkLTc1N2NmMjU0NTdiMiIsImlhdCI6MTY5MjE0MDM1OSwiZXhwIjoxNjkzMzQ5OTU5fQ.9ZVSNaEXp_APFm87HiUNhUqR9AKY_d1VDmO2SuPCBqo`,
  
  },
});

