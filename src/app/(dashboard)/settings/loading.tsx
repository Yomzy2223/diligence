import SettingsContextSkeleton from "@/components/features/BankSettingInfo/settingContext/SettingsContextSkeleton";
import SettingsSkeleton from "@/components/features/BankSettingInfo/SettingsSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 px-10 py-4 border-b border-border">
        <Skeleton className="h-16 w-16" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="pl-10 pr-6 space-y-8">
        <SettingsSkeleton />
        <SettingsContextSkeleton />
      </div>
    </div>
  );
};

export default Loading;
