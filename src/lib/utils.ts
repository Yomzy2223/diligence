import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertToOneSignificantFigure(num: number) {
	const strNum = num.toString();
	const significantNumStr = strNum[0] + "0".repeat(strNum.length - 1);
	return Number(significantNumStr);
}
