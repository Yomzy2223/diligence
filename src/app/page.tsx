import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import Sidebar from "@/components/features/sidebar";
import InvoiceHeader from "@/components/header/invoiceHeader";
import CMSelect from "@/components/cmSelect";
import gtbankImg from "@/assets/images/Gtbank.svg";

export default function Home() {
  return (
    <main className="flex flex-col ml-4 px-6 ">
      <div className="flex items-center gap-4 py-4 ">
        <Image src={gtbankImg} alt="" />
        <div className="flex flex-1 justify-between">
          <p className="text-2xl font-normal ">Home</p>
          <BranchOnboard buttonVariant="secondary">Onboard a branch</BranchOnboard>
        </div>
      </div>
      <CorporateRequest className="my-8" />
    </main>
  );
}
