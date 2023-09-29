import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bankBranchSchema, bankBranchType, theFormPropsType } from "./constants";
import InputWithLabel from "@/components/input/inputWithLabel";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const TheForm = ({
  managerIdToUpdate,
  mutate,
  updateBranchMutation,
  isLoading,
  manager,
  handleClose,
}: theFormPropsType) => {
  const session = useSession();

  // Form definition
  const form = useForm<bankBranchType>({
    resolver: zodResolver(bankBranchSchema),
    defaultValues: {
      name: "",
      location: "",
      managerEmail: "",
    },
  });

  // Submit handler
  function onSubmit(values: bankBranchType) {
    const payload = {
      adminId: session?.data?.user.id || "",
      formInfo: values,
    };
    managerIdToUpdate
      ? updateBranchMutation.mutate({ ...payload, managerId: manager?.id })
      : mutate(payload);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-16 md:w-[90%] m-auto "
      >
        <div className="flex flex-col gap-6 py-2 space-y-8 bg-white rounded-lg ">
          <InputWithLabel
            form={form}
            name="name"
            label="Branch Name"
            placeholder="Enter branch name"
            tipText="Must be the registrered name"
            textSize="text-xs"
            defaultValue={manager?.name}
          />
          <InputWithLabel
            form={form}
            name="location"
            label="Branch State"
            placeholder="Enter branch state"
            tipText="The state where the branch is located"
            textSize="text-xs"
            defaultValue={manager?.location}
          />
          <InputWithLabel
            form={form}
            name="managerEmail"
            label="Branch Manager Email"
            placeholder="Enter branch manager email"
            tipText="Mailing list email is not supported"
            textSize="text-xs"
            defaultValue={manager?.managerEmail}
            disabled={managerIdToUpdate ? true : false}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button type="submit" size="full" loading={isLoading || updateBranchMutation.isLoading}>
            {managerIdToUpdate ? "Update" : "Onboard"}
          </Button>
          <Button size="full" variant="transparent" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TheForm;
