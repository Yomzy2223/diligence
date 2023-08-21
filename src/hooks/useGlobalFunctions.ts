import { itemsPerPage } from "@/lib/config";
import { getUserInfo, roundToNearestMultiple } from "@/lib/globalFunctions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useGlobalFucntions = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const userInfo = getUserInfo()?.data;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value.toString());

      return params.toString();
    },
    [searchParams]
  );

  const setQuery = (name: string, value: string | number) => {
    router.push(pathname + "?" + createQueryString(name, value));
  };

  const managerId =
    userInfo?.role?.toLowerCase() === "manager"
      ? userInfo?.managerId
      : searchParams.get("managerId");

  // Set a new offset depending on the data length
  const setNewOffset = (data: any[]) => {
    if (data) {
      const itemOffset = roundToNearestMultiple(data?.length, itemsPerPage);
      setQuery("itemOffset", itemOffset);
    }
  };

  return {
    createQueryString,
    setQuery,
    managerId,
    setNewOffset,
  };
};
