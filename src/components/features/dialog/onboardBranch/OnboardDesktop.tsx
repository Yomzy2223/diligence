import React, { useEffect, useState } from "react";
import TheForm from "./TheForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { onboardType } from "./constants";

const OnboardDesktop = ({
  children,
  mutate,
  updateBranchMutation,
  isLoading,
  manager,
  managerIdToUpdate,
  shouldClose,
  variant,
  size,
  className,
}: onboardType) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (shouldClose) {
      setOpen(false);
    }
  }, [shouldClose]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <DialogContent
        className="sm:max-w-[425px] md:max-w-[570px] py-14 bg-white "
        cancel={() => setOpen(false)}
      >
        <DialogHeader className="m-auto mb-6 ">
          <DialogTitle>{managerIdToUpdate ? "Update" : "Onboard"} a Branch</DialogTitle>
        </DialogHeader>

        <TheForm
          handleClose={handleClose}
          mutate={mutate}
          updateBranchMutation={updateBranchMutation}
          isLoading={isLoading}
          manager={manager}
          managerIdToUpdate={managerIdToUpdate}
        />
      </DialogContent>
    </Dialog>
  );
};

export default OnboardDesktop;
