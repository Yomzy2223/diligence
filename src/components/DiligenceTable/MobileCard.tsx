import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { normalize } from "@/lib/globalFunctions";

interface propType {
  currentItems: any[];
  headers: string[];
  hiddenHeaders?: string[];
}

const MobileCard = ({ currentItems, headers, hiddenHeaders }: propType) => {
  // Remove hidden headers
  if (hiddenHeaders) {
    headers = headers.map((header) =>
      !hiddenHeaders.find((el) => normalize(el) === normalize(header)) ? header : "none"
    );
  }
  // This re-formats the current items
  const data = currentItems?.map((item) => {
    let itemInfo: any[] = [];
    headers?.forEach((header, i) => (itemInfo[i] = { field: header, value: item[i] }));
    return itemInfo;
  });

  return (
    <div className="flex flex-col gap-4 p-4 md:hidden rounded">
      {data?.map((item, i) => (
        <Accordion key={i} type="single" collapsible className="border-border border rounded p-4">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="hover:no-underline items-start py-0 text-sm">
              <div className="flex flex-col items-start gap-4">
                {item?.slice(1, 3).map((each, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {each.field !== "none" && (
                      <span className="text-foreground-label">{each.field}:</span>
                    )}
                    <span>{each.value}</span>
                  </span>
                ))}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-start gap-4 mt-4">
                {item?.slice(3).map((each, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {each.field !== "none" && (
                      <span className="text-foreground-label">{each.field}:</span>
                    )}
                    <span>{each.value}</span>
                  </span>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default MobileCard;
