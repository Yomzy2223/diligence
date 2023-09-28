import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CMToolTip = ({
  trigger,
  content,
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger type="button">{trigger}</TooltipTrigger>
        <TooltipContent className="text-xs text-label text-center px-1 py-1 bg-slate-50 max-w-[200px]">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CMToolTip;
