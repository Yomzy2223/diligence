"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface propsType {
  nav: { text: string; path: string }[];
  defaultURL?: string;
}

const ActiveNav = ({ nav, defaultURL }: propsType) => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 w-max h-max py-[10px] max-w-full overflow-auto no-scrollbar">
      {nav.map((el, i) => {
        const isActive = pathname === el.path || (i === 0 && pathname === defaultURL);

        return (
          <Link key={i} href={el.path}>
            <span
              className={cn(
                "bg-transparent text-sm p-3 text-muted-foreground whitespace-nowrap md:text-base",
                isActive && "border-b-2 border-primary text-primary"
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

export default ActiveNav;
