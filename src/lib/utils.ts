import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface TimeProps {
  formattedTime: string;
  timeType: string;
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToOneSignificantFigure(num: string) {
  const strNum = num.toString();
  const significantNumStr = strNum[0] + "0".repeat(strNum.length - 1);
  return Number(significantNumStr);
}
