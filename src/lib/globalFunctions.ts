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

export const getUserInfo = () => {
  let userInfo = localStorage.getItem("userInfo");
  let parsedUserInfo;

  if (userInfo) {
    parsedUserInfo = JSON.parse(userInfo);
  }
  return parsedUserInfo || {};
};

export const getEnterpriseInfo = () => {
  let enterpriseInfo = localStorage.getItem("enterpriseInfo");
  let parsedEnterpriseInfo;

  if (enterpriseInfo) {
    parsedEnterpriseInfo = JSON.parse(enterpriseInfo);
  }
  return parsedEnterpriseInfo || {};
};

// Set brand color
export const setColor = (color: string) => {
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
};
