"use client";

import Image from "next/image";
import React, { useState } from "react";
import sidebriefLogo from "@/assets/images/SidebriefLogo.svg";
import Gtbank from "@/assets/images/Gtbank.svg";
import CMSelect from "@/components/cmSelect";
import { allMonths, allYears } from "@/lib/config";
import { cn } from "@/lib/utils";

const InvoiceHeader = () => {
  const currYear = new Date().toLocaleString("default", { year: "numeric" });
  const currMonth = new Date().toLocaleString("default", { month: "long" });
  const currMonthShort = allMonths.find((el) => el.full === currMonth)?.short;

  const [month, setMonth] = useState(currMonth);
  const [paid, setPaid] = useState(false);

  const handleMonthSelect = (month: string) => {
    const monthFull = allMonths.find((el) => el.short === month)?.full;
    setMonth(monthFull || "");
  };

  const handleYearSelect = (year: string) => {};

  return (
    <div className="flex flex-col gap-12 bg-[url('../assets/images/invoice-header-background.svg')] bg-no-repeat bg-cover min-h-[499px] rounded-lg px-12 py-16 ">
      <div className="flex justify-between items-center ">
        <Image src={sidebriefLogo} alt="" />
        <div className="flex gap-4">
          <CMSelect
            placeholder="Select month"
            options={allMonths.map((el) => el.short)}
            handleSelect={handleMonthSelect}
            defaultValue={currMonthShort}
          />
          <CMSelect
            placeholder="Select year"
            options={allYears}
            handleSelect={handleYearSelect}
            defaultValue={currYear}
          />
        </div>
      </div>
      <div className="flex gap-4 ">
        <Image src={Gtbank} alt="" className="w-16 h-16 object-contain " />
        <div className="flex flex-col justify-between ">
          <p className="text-white text-2xl ">Guarantee Trust Bank</p>
          <p className="text-white text-lg ">Joined Jan 2023</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-white text-5xl ">Corporate Search Invoice</h3>
        {month && (
          <p className="flex items-center gap-4 text-white text-2xl ">
            {"Month of " + month}{" "}
            <span
              className={cn("text-destructive text-lg", paid && "text-success")}
            >
              {paid ? "Paid" : "Not paid"}
            </span>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default InvoiceHeader;
