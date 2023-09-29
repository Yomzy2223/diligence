"use client";

import { Input } from "@/components/ui/input";
import { useRequestStore } from "@/store/requestStore";

export default function TheInput() {
  const { setSearchValue, searchValue } = useRequestStore();

  return (
    <Input
      variant="search"
      placeholder="Search for request..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="min-w-[150px]"
    />
  );
}
