import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import imageLoading from "@/assets/images/imagePlaceholder.png";
import { useSession } from "next-auth/react";
import StaffList from "./StaffList";
import { Form } from "@/components/ui/form";
import { addStaffPropsType } from "./constants";
import InputWithLabel from "@/components/input/inputWithLabel";

const AddStaffMobile = ({ form, onSubmit, isLoading }: Omit<addStaffPropsType, "children">) => {
  const { data } = useSession();

  let enterpriseInfo = data?.enterprise;

  const router = useRouter();
  const searchParams = useSearchParams();
  const action = searchParams.get("action");

  return (
    <Drawer
      open={action === "add-staff" ? true : false}
      onClose={() => router.back()}
      direction="right"
      className="p-5 pt-3 !w-[100%]"
    >
      <div className="flex items-center gap-4 mb-4">
        <ArrowLeft onClick={() => router.back()} />
        <Image src={enterpriseInfo?.logo || imageLoading} alt="" width={60} height={60} />
      </div>

      <div className="mb-8 ">
        <p className="text-lg font-semibold">Add Staff</p>
        <p className="text-xs pt-2">
          Only staff members who have been added can create an account with their added email
          address
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full m-auto ">
          <div className="flex item-center gap-4 bg-white rounded-lg mb-6">
            <InputWithLabel
              label="Email address"
              form={form}
              name="email"
              placeholder="Enter staff work email"
              classNames={{ formItem: "w-full" }}
            />
          </div>

          <StaffList />

          <Button type="submit" size="full" loading={isLoading}>
            Add
          </Button>
          <Button
            type="button"
            variant="ghost2"
            size="full"
            className="text-foreground-label hover:text-foreground-label mt-2"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </form>
      </Form>
    </Drawer>
  );
};

export default AddStaffMobile;
