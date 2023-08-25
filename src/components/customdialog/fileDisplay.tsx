import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { Download, Pdf } from "@/assets/icons";
import { Button } from "@/components/ui/button";

const FileDisplayVariants = cva(
  "p-4 pr-6 border border-dashed rounded-lg flex justify-between items-center",
  {
    variants: {
      variant: {
        success: "border-success",
        error: "border-destructive",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

interface FileDisplayProps extends VariantProps<typeof FileDisplayVariants> {
  className?: string;
  children?: string;
  onDownloadClick?: () => void;
}

export const FileDisplay = ({
  variant,
  className,
  children,
  onDownloadClick,
}: FileDisplayProps) => {
  return (
    <div className={cn(FileDisplayVariants({ variant }), className)}>
      <div className="flex items-center gap-2">
        <Image src={Pdf} alt={"file type"} />
        <p className="text-base leading-7 underline">{children}</p>
      </div>
      <Button variant={"ghost"} size={"slim"} onClick={onDownloadClick}>
        <Image src={Download} alt="" />
      </Button>
    </div>
  );
};
