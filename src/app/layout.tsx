import "./globals.css";
import type { Metadata } from "next";
import { BrFirma } from "@/font";
import { cn } from "@/lib/utils";
import Providers from "@/lib/provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Sidebrief",
  description: "The fastest way for anyone to launch and manage a business from anywhere.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(BrFirma.className)}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
