import { cn } from "@/lib/utils";

interface propType extends React.HTMLAttributes<HTMLDivElement> {
  invertColor?: boolean;
}

function Skeleton({ className, invertColor, children, ...props }: propType) {
  const bgColor = invertColor ? "bg-[#ffffffcc]" : "bg-[#F1F1F1]";

  return (
    <div className={cn("animate-pulse rounded-md", bgColor, className)} {...props}>
      {children}
    </div>
  );
}

export { Skeleton };
