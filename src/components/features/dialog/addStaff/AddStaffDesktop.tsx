import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import InputWithLabel from "@/components/input/inputWithLabel";
import { addStaffPropsType } from "./constants";
import StaffList from "./StaffList";

const AddStaffDesktop = ({ children, className, form, onSubmit, isLoading }: addStaffPropsType) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open}>
      <Button onClick={() => setOpen(true)} className={className}>
        {children}
      </Button>
      <DialogContent
        className="sm:max-w-[425px] md:max-w-[570px] py-14 bg-white gap-0"
        cancel={() => setOpen(false)}
      >
        <DialogHeader className="m-auto w-full mb-6">
          <DialogTitle>Add Staff</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-16 w-full m-auto mb-8 "
          >
            <div className="flex item-center gap-4 bg-white rounded-lg ">
              <InputWithLabel
                form={form}
                name="email"
                placeholder="Enter staff work email"
                textSize="text-xs"
                classNames={{ formItem: "w-4/5" }}
                bottom={
                  <span className="text-xs pt-2">
                    Only staff members who have been added can create an account with their added
                    email address
                  </span>
                }
              />
              <Button
                type="submit"
                variant="ghost2"
                size="icon"
                loading={isLoading}
                loadingStroke="hsl(var(--primary))"
                className="relative top-5 underline px-1"
              >
                Add
              </Button>
            </div>
          </form>
        </Form>

        <StaffList />

        <div className="flex justify-end">
          <Button type="button" onClick={() => setOpen(false)}>
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaffDesktop;
