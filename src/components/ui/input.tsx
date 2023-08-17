import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import searchIcon from "@/assets/svg/searchIcon.svg";
import Image from "next/image";
import { Button } from "./button";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50  ",
  {
    variants: {
      variant: {
        default: "py-4 px-6",
        search: "pr-12",
        transparent:
          "bg-transparent text-foreground border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none !px-0 !mt-0 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "transparent" | "search" | null | undefined;
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, variant, onSearchClick, ...props }, ref) => {
    const isSearch = variant === "search";
    className = cn(className, error && "focus-visible:ring-0 border-destructive");

    return (
      <div className={cn("flex flex-1 relative ", isSearch && "max-w-[380px]")}>
        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
        {isSearch && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1.5 right-3 bg-secondary p-1.5 rounded-full cursor-pointer hover:bg-secondary/90"
            onClick={onSearchClick}
          >
            <Image src={searchIcon} alt="search" width={16} height={16} />
          </Button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
