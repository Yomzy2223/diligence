import axios from "axios";
import { getAllYearsUpToCurrentYear } from "./globalFunctions";
import { getSession } from "next-auth/react";
import HomeIcon from "@/assets/icons/homeIcon";
import DetailsIcon from "@/assets/icons/detailsIcon";
import SettingsIcon from "@/assets/icons/settingsIcon";

//
export const sidebarItems = [
  { href: "/", text: "Home", icon: HomeIcon },
  { href: "/details", text: "Details", icon: DetailsIcon },
  { href: "/settings", text: "Settings", icon: SettingsIcon },
];

export const allMonths = [
  {
    short: "Jan",
    full: "January",
  },
  {
    short: "Feb",
    full: "February",
  },
  {
    short: "Mar",
    full: "March",
  },
  {
    short: "Apr",
    full: "April",
  },
  {
    short: "May",
    full: "May",
  },
  {
    short: "Jun",
    full: "June",
  },
  {
    short: "Jul",
    full: "July",
  },
  {
    short: "Aug",
    full: "August",
  },
  {
    short: "Sep",
    full: "September",
  },
  {
    short: "Oct",
    full: "October",
  },
  {
    short: "Nov",
    full: "November",
  },
  {
    short: "Dec",
    full: "December",
  },
];

export const allYears = getAllYearsUpToCurrentYear();

export const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://iapkmjspxh.us-east-1.awsapprunner.com/"
      : "https://h2rwx2fbhm.us-east-1.awsapprunner.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${session.token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const itemsPerPage = 5;
