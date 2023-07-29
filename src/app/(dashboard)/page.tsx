import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import gtbankImg from "@/assets/images/Gtbank.svg";
import { redirect } from "next/navigation";

export default function Home() {
  if (true) redirect("/auth/login");

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
