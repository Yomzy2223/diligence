"use client";

import { Button } from "@/components/ui/button";
import { useEnterpriseStaff } from "@/hooks/useEnterprise";
import { useGlobalFucntions } from "@/hooks/useGlobalFunctions";
import React, { useState } from "react";

const StaffList = () => {
  const [staffToDelete, setStaffToDelete] = useState({});

  const { managerId } = useGlobalFucntions();
  const { useViewBranchStaffQuery, deleteStaffMutation } = useEnterpriseStaff();

  const viewBranchStaffQuery = useViewBranchStaffQuery(managerId);
  const allStaff = viewBranchStaffQuery.data?.data?.data;

  const handleRemove = (staff: any) => {
    setStaffToDelete(staff);
    deleteStaffMutation.mutate(staff?.id);
  };
  return (
    <div>
      {allStaff?.length > 0 && (
        <div className="space-y-2 mb-10 md:mb-12">
          <p className="text-sm font-semibold">List of added staff</p>
          <div className="bg-background-grey max-h-72 overflow-auto p-3.5 rounded-lg space-y-4">
            {allStaff?.map((el: any, i: number) => (
              <div key={i} className="flex justify-between gap-4">
                <span className="text-sm">{el?.email}</span>
                <Button
                  size="slim"
                  variant="destructive2"
                  loading={deleteStaffMutation.isLoading && staffToDelete === el}
                  onClick={() => handleRemove(el)}
                  className="whitespace-nowrap"
                >
                  X Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffList;
