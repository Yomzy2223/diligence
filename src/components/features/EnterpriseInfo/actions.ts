import { useEnterpriseStaff } from "@/hooks/useEnterprise";
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";
import { itemsPerPage } from "@/lib/config";
import { compareAsc, format } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import numeral from "numeral";
import { useEffect } from "react";

export const useActions = ({
  enterprise,
  managerId,
  searchValue,
}: {
  enterprise: any;
  managerId: any;
  searchValue: string;
}) => {
  const { setQuery } = useGlobalFucntions();
  const { useViewStaffWithRequestsQuery } = useEnterpriseStaff();
  const { data } = useViewStaffWithRequestsQuery(managerId);

  const normalize = (text: string) => text?.toLowerCase()?.trim();

  // Managers and Staff
  const diligenceManagers = enterprise?.data?.data?.data?.diligenceManager?.sort((a: any, b: any) =>
    compareAsc(new Date(b?.createdAt), new Date(a?.createdAt))
  );
  const diligenceStaff = data?.data?.data?.sort((a: any, b: any) =>
    compareAsc(new Date(b?.createdAt), new Date(a?.createdAt))
  );

  // Filters Managers and filtered Staff
  const filteredManagers = diligenceManagers?.filter((el: any) => {
    return (
      normalize(el?.name)?.includes(normalize(searchValue)) ||
      normalize(el?.location)?.includes(normalize(searchValue)) ||
      normalize(el?.managerEmail)?.includes(normalize(searchValue))
    );
  });
  const filteredStaff = diligenceStaff?.filter((el: any) => {
    return normalize(el?.email)?.includes(normalize(searchValue));
  });

  // Set new offset when searching
  useEffect(() => {
    if (searchValue) setQuery("itemOffset", 0);
  }, [searchValue]);

  const adminHeaders = ["S/N", "Branch name", "Branch location", "Manager email", "Date Added"];

  const adminBody = filteredManagers?.map((manager: any, index: number) => {
    const formattedDate = format(new Date(manager?.createdAt), "dd/MM/yyyy");

    return [
      numeral(index + 1)?.format("00"),
      manager?.name,
      manager?.location,
      manager?.managerEmail,
      formattedDate,
    ];
  });

  const branchHeaders = ["S/N", "Staff name", "Staff email", "Date added", "Requests"];

  const branchBody = filteredStaff?.map((staff: any, index: number) => {
    const formattedDate = format(new Date(staff?.createdAt), "dd/MM/yyyy");
    const name = staff?.firstname + " " + staff?.lastname;

    return [
      numeral(index + 1)?.format("00"),
      name,
      staff?.email,
      formattedDate,
      staff?.num_requests,
    ];
  });

  const handleManagerClick = (manager?: (string | number)[], rowIndex?: number) => {
    if (typeof rowIndex === "number") {
      const clicked = filteredManagers[rowIndex];
      setQuery("managerId", clicked?.id);
    }
  };

  return {
    adminHeaders,
    adminBody,
    branchHeaders,
    branchBody,
    handleManagerClick,
  };
};
