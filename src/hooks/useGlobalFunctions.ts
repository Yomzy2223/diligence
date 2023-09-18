import { itemsPerPage } from "@/lib/config";
import { getUserInfo } from "@/lib/globalFunctions";
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
      const params = new URLSearchParams(searchParams.toString());
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

  return {
    createQueryString,
    setQuery,
    managerId,
  };
};
