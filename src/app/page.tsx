import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import Sidebar from "@/components/features/sidebar";
import InvoiceHeader from "@/components/header/invoiceHeader";
import CMSelect from "@/components/cmSelect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      {/* <CorporateRequest /> */}
      <BranchOnboard>Onboard Branch</BranchOnboard>
      {/* <Sidebar /> */}
      {/* <InvoiceHeader /> */}
    </main>
  );
}
