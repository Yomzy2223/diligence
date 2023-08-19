import axios from "axios";
import { saveAs } from "file-saver";

export const getAllYearsUpToCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;

  const allYears = [];
  for (let year = startYear; year <= currentYear; year++) {
    allYears.push(year.toString());
  }

  return allYears;
};

export const getUserInfo = () => {
  let userInfo = localStorage.getItem("userInfo");
  let parsedUserInfo;

  if (userInfo) {
    parsedUserInfo = JSON.parse(userInfo);
  }
  return parsedUserInfo || {};
};

export const handleDownloadFile = (cloudinaryLink: string, fileName: string) => {
  const result = axios
    .get(cloudinaryLink, {
      responseType: "blob",
    })
    .then((res) => {
      saveAs(res.data, fileName);
    });

  return result;
};
