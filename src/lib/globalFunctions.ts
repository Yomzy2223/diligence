"use client";

import axios from "axios";
import { saveAs } from "file-saver";
import tinycolor from "tinycolor2";

export const getAllYearsUpToCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;

  const allYears = [];
  for (let year = startYear; year <= currentYear; year++) {
    allYears.push(year.toString());
  }

  return allYears;
};

export const handleDownloadFile = (cloudinaryLink: string, fileName: string) => {
  // Convert http to https if necessary
  const secureLink = cloudinaryLink.startsWith("http://")
    ? "https://" + cloudinaryLink.slice(7)
    : cloudinaryLink;

  const result = axios
    .get(secureLink, {
      responseType: "blob",
    })
    .then((res) => {
      saveAs(res.data, fileName);
    })
    .catch((err) => {
      console.log(err.message);
      throw new Error(err);
    });

  return result;
};

export const getEnterpriseInfo = () => {
  let enterpriseInfo;
  let parsedEnterpriseInfo;

  if (typeof localStorage !== "undefined") {
    enterpriseInfo = localStorage.getItem("enterpriseInfo");
    if (enterpriseInfo) {
      parsedEnterpriseInfo = JSON.parse(enterpriseInfo);
    }
  }
  return parsedEnterpriseInfo || {};
};

// Set brand color
export const setColor = (color?: string) => {
  if (!color) return;
  if (typeof window !== "undefined") {
    const primary = tinycolor(color);
    let bgLight = primary.setAlpha(0.1).toHsl();

    const root = document.documentElement;

    if (primary) {
      const { h, s, l } = primary.toHsl();
      const parsedPrimary = h + " " + s * 100 + "%" + " " + l * 100 + "%";
      root.style.setProperty("--primary", parsedPrimary);
    }
    if (bgLight) {
      const { h, s, l, a } = bgLight;
      const parsedBgLight = h + " " + s * 100 + "%" + " " + l * 100 + "%" + " / " + a;
      root.style.setProperty("--background-light", parsedBgLight);
    }
  }
};

export const getRegNumberInfo = (regNo: string) => {
  let type = "";
  let number = "";
  let amount = 0;

  if (regNo) {
    regNo = regNo.toString().toLowerCase();
    const firstTwo = regNo.slice(0, 2);
    const firstThree = regNo.slice(0, 3);
    const firstFour = regNo.slice(0, 4);
    const firstFive = regNo.slice(0, 5);

    if (firstTwo === "rc") {
      type = "RC";
      number = regNo.slice(2);
      amount = 10000;
    } else if (firstThree === "llc") {
      type = "LLC";
      number = regNo.slice(3);
      amount = 10000;
    } else if (firstTwo === "lp") {
      type = "LP";
      number = regNo.slice(2);
      amount = 10000;
    } else if (firstThree === "llp") {
      type = "LLP";
      number = regNo.slice(3);
      amount = 10000;
    } else if (firstTwo === "sp") {
      type = "SP";
      number = regNo.slice(2);
      amount = 10000;
    } else if (firstThree === "plc") {
      type = "PLC";
      number = regNo.slice(3);
      amount = 10000;
    } else if (firstThree === "npo") {
      type = "NPO";
      number = regNo.slice(3);
      amount = 10000;
    } else if (firstFive === "co-op") {
      type = "Co-op";
      number = regNo.slice(4);
      amount = 10000;
    } else if (firstTwo === "pc") {
      type = "PC";
      number = regNo.slice(2);
      amount = 10000;
    } else if (firstThree === "jv") {
      type = "JV";
      number = regNo.slice(2);
      amount = 10000;
    }
  }

  return {
    type,
    number,
    amount,
  };
};

export const normalize = (text: string) => text?.toLowerCase()?.trim();
