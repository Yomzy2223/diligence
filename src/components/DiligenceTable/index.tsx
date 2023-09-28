"use client";
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
import ReactPaginate from "react-paginate";
import { useSearchParams } from "next/navigation";
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";
import { itemsPerPage } from "@/lib/config";
import MobileCard from "./MobileCard";

interface TableProps {
  header: string[];
  body: (string | number)[][];
  rowCursor?: boolean;
  onRowClick?: (cellData?: (string | number)[], rowIndex?: number) => void;
  onCellClick?: (cellData?: string | number, rowIndex?: number, columnIndex?: number) => void;
  mobileHiddenHeaders?: string[];
}

export const DiligenceTable = ({
  header,
  body,
  onRowClick,
  onCellClick,
  mobileHiddenHeaders,
}: TableProps) => {
  const handleCellClick = (
    cellData?: string | number,
    rowIndex?: number,
    columnIndex?: number
  ): void => {
    // Call the provided onCellClick function with the clicked cell's data
    if (onCellClick) onCellClick(cellData, rowIndex, columnIndex);
  };
  const { setQuery } = useGlobalFucntions();

  const searchParams = useSearchParams();

  const itemOffset: string = searchParams.get("itemOffset") || "";
  const parsedItemOffset = parseInt(itemOffset) || 0;

  const endOffset = (parsedItemOffset || 0) + itemsPerPage;
  const currentItems = body?.slice(parsedItemOffset, endOffset);
  const pageCount = Math.ceil(body?.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % body?.length;
    setQuery("itemOffset", newOffset);
  };

  const handleRowClick = (rowData: (string | number)[], rowIndex: number): void => {
    // Call the provided onRowClick function with the clicked cell's data
    if (onRowClick) onRowClick(rowData, rowIndex);
  };

  return (
    <div className="border border-border">
      <Table className="min-w-full bg-white border-spacing-0 border-b border-border hidden md:block ">
        <TableHeader className="w-full text-base text-gray-900 bg-gray-100 border-none">
          <TableRow className="w-full">
            {header?.map((text, index) => (
              <TableHead
                className="px-6 py-5 text-sm font-medium leading-5 text-left text-gray-900 border-b-0 max-w-max whitespace-nowrap "
                key={index}
              >
                {text}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {currentItems?.map((row, rowIndex) => (
            <TableRow
              className="w-full"
              key={rowIndex}
              onClick={() => handleRowClick(row, rowIndex)}
            >
              {row?.map((cell, columnIndex) => (
                <TableCell
                  className={cn(
                    "text-sm text-gray-900 border-b-0 leading-5 text-left px-6 py-5 m-0 font-normal overflow-hidden max-w-max",
                    {
                      "cursor-pointer": onRowClick ? true : false,
                    }
                  )}
                  key={columnIndex}
                  onClick={() => handleCellClick(cell, rowIndex, columnIndex)}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <MobileCard
        currentItems={currentItems}
        headers={header}
        hiddenHeaders={mobileHiddenHeaders}
      />

      {body?.length > itemsPerPage && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="flex gap-4 my-4 max-w-max m-auto p-2 border border-border rounded"
          pageClassName=""
          pageLinkClassName="px-3 py-1.5 text-muted-foreground "
          previousClassName=""
          previousLinkClassName="px-3 py-1.5 text-black border-r border-border"
          nextClassName=""
          nextLinkClassName="px-3 py-1.5 text-black border-l border-border"
          activeClassName=""
          activeLinkClassName="text-black bg-background-light rounded"
        />
      )}
    </div>
  );
};
