import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { onboardType } from "./constants";
import TheForm from "./TheForm";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import { useSession } from "next-auth/react";

const OnboardMobile = ({
  mutate,
  updateBranchMutation,
  managerIdToUpdate,
  manager,
  isLoading,
}: Omit<onboardType, "children">) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const action = searchParams.get("action");

  const { data } = useSession();
  let enterpriseInfo = data?.enterprise;

  return (
    <Drawer
      open={action === "onboard-branch" ? true : false}
      onClose={() => router.back()}
      direction="right"
      className="p-5 !w-[100%]"
    >
      <div className="flex items-center gap-4 mb-4">
        <ArrowLeft onClick={() => router.back()} />
        <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} />
      </div>

      <p className="text-lg font-semibold">Onboard a branch</p>

      <TheForm
        mutate={mutate}
        handleClose={() => router.back()}
        updateBranchMutation={updateBranchMutation}
        isLoading={isLoading}
        manager={manager}
        managerIdToUpdate={managerIdToUpdate}
      />
    </Drawer>
  );
};

export default OnboardMobile;
