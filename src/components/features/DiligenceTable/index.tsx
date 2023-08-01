import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Obj = { [key: string | number]: string };
interface TableProps {
  header: string[];
  body: (string | number)[][];
  bodyFullData?: any;
  rowCursor?: string;
  headerStyle?: Obj;
  bodyStyle?: Obj;
  status?: string;
  // onRowClick?: (bodyFullData?: any) => void
  // onClick?: (bodyFullData?: any, row?: number, column?: number) => void
}

export const DiligenceTable = ({
  header,
  body,
  bodyFullData,
  rowCursor,
  headerStyle,
  bodyStyle,
}: // onRowClick,
// onClick
TableProps) => {
  // const handleRowClick = (e: any, index: number) => {
  //   if (onRowClick) onRowClick(bodyFullData[index])
  // }

  // const handleCellClick = (e: any, row: number, column: number) => {
  //   if (onClick) onClick(bodyFullData[row], row + 1, column + 1)
  // }
  return (
    <Table className="min-w-full bg-white border-spacing-0">
      <TableHeader
        className="w-full text-base text-gray-900 bg-gray-100 border-none"
        style={headerStyle}
      >
        <TableRow className="w-full ">
          {header?.map((text, index) => (
            <TableHead
              className="px-6 py-5 text-sm font-medium leading-5 text-left text-gray-900 border-b-0 max-w-max "
              key={index}
            >
              {text}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="w-full" style={bodyStyle}>
        {body?.map((each, row) => (
          <TableRow
            className="w-full bg-white"
            key={row}
            // onClick={(e) => handleRowClick(e, row)}
            style={{ cursor: rowCursor || "" }}
          >
            {each?.map((el: any, column) => (
              <TableCell
                className={cn(
                  "text-sm text-gray-900 border-b-0 leading-5 text-left px-6 py-5 m-0 font-normal overflow-hidden max-w-max",
                  {
                    "text-[#0082AA]":
                      each[each.length - 1] === "Under review" && column === each.length - 1,
                    "text-[#DE4A09]":
                      each[each.length - 1] === "Completed" && column === each.length - 1,
                    "text-[#00D448]":
                      each[each.length - 1] === "Paid" && column === each.length - 1,
                  }
                )}
                key={column}
                // style={statusStyle}
                //onClick={(e) => handleCellClick(e, row, column)}
              >
                {el}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
