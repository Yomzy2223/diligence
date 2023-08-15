import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface TimeProps{
	formattedTime: string;
	timeType: string;
  }
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertToOneSignificantFigure(num: string)  {
	const strNum = num.toString();
	const significantNumStr = strNum[0] + "0".repeat(strNum.length - 1);
	return Number(significantNumStr);
}

export function getTimeInfo (timestampStr: string): TimeProps {
	const date = new Date(timestampStr);

	const hours = date.getHours();
	const timeType = hours < 12 ? "AM" : "PM"
	const minutes = "0" + date.getMinutes();

	const formattedTime = `${hours}:${minutes.substr(-2)} ${timeType}`;

  	return formattedTime; 

} 
