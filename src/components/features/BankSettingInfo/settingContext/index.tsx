import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SettingContext = () => {
  return (
    <div className="space-y-3">
      <h6 className="text-base font-medium leading-6 text-foreground md:text-xl">
        Support and help
      </h6>
      <div className="flex flex-col w-full border rounded text-foreground md:p-4">
        <SLink href="">Contact support</SLink>
        <SLink href="">Help center</SLink>
        <SLink href="">Troubleshoot</SLink>
      </div>
    </div>
  );
};

const SLink = ({ children, href }: { children: string; href: string }) => (
  <Link
    href={href}
    className={cn(
      buttonVariants({
        variant: "ghost2",
      }),
      "justify-start text-foreground hover:text-foreground/90 "
    )}
  >
    {children}
  </Link>
);
