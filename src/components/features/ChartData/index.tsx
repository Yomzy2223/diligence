"use client"

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Legend, 
  ResponsiveContainer,
} from "recharts";
import { monthsData } from "./chartData";


interface DayData {
  day: string;
  Earnings: number;
}

interface WeekData {
  week: number;
  days: DayData[];
  Earnings: number;
}

interface MonthData {
  year: number;
  month: string;
  weeks: WeekData[];
  Earnings: number;
}



export const Charts = () => {  
  const currentDate = new Date();
  
  const getCurrentMonth = currentDate.getMonth() + 1;
  console.log("current month", getCurrentMonth)

  const currentYear = currentDate.getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState<string>(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>();
  
  const [selectedWeek, setSelectedWeek] =useState<number | undefined>();


  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = e.target.value
    setSelectedYear(selectedYear)
  }

  const filterWeeksByMonth = (selectedMonth: string | undefined): WeekData[]  => {
    const monthData = monthsData.find((data) => data.month === selectedMonth);
    return monthData ? monthData.weeks : [];
  };

 

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth:string = e.target.value;
    setSelectedMonth(selectedMonth);
    // setSelectedWeek(null);
  };

  const handleWeekChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeek(parseInt(e.target.value));
  };
  

  const monthsDataObj: Record<string, MonthData> = (monthsData || []).reduce(
    (acc, monthData) => {
      acc[monthData.month] = monthData;
      return acc;
    },
    {} as Record<string, MonthData>
  );

  const months: string[] = Object.keys(monthsDataObj);


  const weeksData: WeekData[] = filterWeeksByMonth(selectedMonth);
   
  const years = Array.from(new Set(monthsData.map((data) => data.year)));

  const selectedWeekData = weeksData.find((week) => week.week === selectedWeek);

  const chartData = selectedWeekData ? selectedWeekData.days : [];

  
  return ( 
    <>
      <ResponsiveContainer width="100%" className='border-1'>   
        <div className="flex-1 space-y-4 pt-6 space-x-3  w-[600px] h-[80px]">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-xl font-bold tracking-tight">Payment Analytics</h2>
              <div className="flex items-center space-x-5">

                <div className="year-selector border-2 rounded-sm  border-solid">
                  <select id="yearselect"  value={selectedYear} onChange={handleYearChange}>
                    {years.map((year) => (
                      <option key={year} value={year}>
                          {year}
                      </option>
                    ) )}
                  </select>
                </div>

                <div className="month-selector border-2 rounded-sm border-solid">
                  <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
          </div>
  
          <div className="week-selector border-2 rounded-sm  border-solid float-right">
            <select id="weekSelect" value={selectedWeek} onChange={handleWeekChange}>
                {weeksData.map((week) => (
                  <option key={week.week} value={week.week}>
                    Week {week.week}
                  </option>
                ))}
              </select>
          </div>
        </div>

      </ResponsiveContainer>
      <div className="w-[600px] h-[100px]">    
        <AreaChart 
          width={600} 
          height={300} 
          data={chartData} 
          className="p-2"
          
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00a2d4" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#00a2d4" stopOpacity={0.1} />
            </linearGradient>
          </defs> 
          <XAxis 
            dataKey="day"
            tickLine={{ stroke: "white" }}
            axisLine={{ stroke: "white" }}
            dy={10}
            dx={15}
            interval={"preserveStartEnd"}
            />
          <YAxis 
              domain={[0, 8]}
              tickLine={{ stroke: "white"}}
              axisLine={{ stroke: "white" }}
              dx={-8}
          />
          <Tooltip />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="Earnings" 
            stroke="#00a2d4"
            fill="#00a2d4"
            
            />
        </AreaChart>

      </div>
    </>
   
  )
}


