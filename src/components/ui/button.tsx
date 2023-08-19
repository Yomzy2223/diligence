import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Tcolor from "tinycolor2";
import { Oval } from "react-loading-icons";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all ",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        destructive2: "bg-destructive/20 text-foreground/70 text-sm hover:bg-destructive/10",
        outline: "border border-primary text-primary bg-transparent hover:bg-accent",
        ["outline-secondary"]: "border border-secondary text-secondary bg-white hover:bg-white/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        ghost2: "",
        link: "text-primary underline-offset-4 hover:underline",
        transparent: "bg-none text-muted-foreground",
        orangeOutline: " flex justify-center item-center border border-secondary",
      },
      size: {
        default: "h-10 px-4 py-2 w-max min-w-[126px]",
        full: "px-6 py-4 w-full min-w-max",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-max w-max",
        slim: "h-fit w-fit p-1",
        link: "h-fit w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: string;
  loading?: boolean;
  loadingStroke?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      color,
      loading,
      loadingStroke,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const luminence = Tcolor(color).getLuminance();

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={
          color
            ? variant === "outline"
              ? { borderColor: color, color: color }
              : {
                  backgroundColor: color,
                  color: luminence > 0.3 ? "#242627" : "#fff",
                }
            : {}
        }
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading ? <Oval stroke={loadingStroke || "#fff"} className="w-5 h-5 " /> : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
