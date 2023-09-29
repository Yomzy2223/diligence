"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface propsType {
  nav: { text: string; path: string }[];
  defaultURL?: string;
}

const ActiveNav2 = ({ nav, defaultURL }: propsType) => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 border border-border w-max h-max px-[1px] py-[10px] rounded-lg bg-background-grey overflow-auto">
      {nav.map((el, i) => {
        const isActive = pathname === el.path || (i === 0 && pathname === defaultURL);

        return (
          <Link key={i} href={el.path}>
            <span
              className={cn(
                "bg-transparent text-sm p-3 rounded-lg border border-border whitespace-nowrap md:text-base",
                isActive && "bg-white"
              )}
            >
              {el.text}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ActiveNav2;
