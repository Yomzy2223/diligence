import BranchOnboard from "@/components/features/dialog/onboardBranch";
import CorporateRequest from "@/components/features/corporateRequest/CorporateRequest";
import Image from "next/image";
import { ReactNode } from "react";
import ActiveNav2 from "@/components/activeNav/ActiveNav2";
import { allStatus } from "./constants";
import { getEnterpriseInfo, getUserInfo } from "@/lib/globalFunctions";
import AddStaff from "@/components/features/dialog/addStaff";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import TheInput from "./input";
import { getServerSession } from "@/lib/getServerSession";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();

  const userToken = session?.token;
  if (!userToken) redirect("/auth/login");

  const userRole = session.user.role;

  // const enterpriseInfo = getEnterpriseInfo()?.data;

  return (
    <main className="flex flex-col px-6 pb-8">
      <div className="flex items-center gap-4 py-4 ">
        {/* <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} /> */}
        <div className="flex justify-between flex-1">
          {/* <p className="text-2xl font-normal ">{enterpriseInfo?.name || ""}</p> */}
          {userRole === "admin" && <BranchOnboard>Onboard a branch</BranchOnboard>}
          {userRole === "manager" && <AddStaff>Add staff</AddStaff>}
        </div>
      </div>
      <CorporateRequest className="my-8" />

      <div className="flex items-center justify-between gap-8 mb-4">
        <ActiveNav2 nav={allStatus} defaultURL="/" />
        <TheInput />
      </div>
      {children}
    </main>
  );
};

export default Layout;
