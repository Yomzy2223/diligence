import React, { useState, useEffect } from "react";
import { ActiveNav } from "@/components/features/activeNav";
import Image from "next/image";
import { DiligenceTable } from "../../DiligenceTable";
import { EmptyList } from "../../emptyList";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { viewAllRequests, updateRequest, deleteRequest } from "@/api/requestApi";
import { viewEnterpriseByEmail } from '@/api/bankApi';
import numeral from "numeral";
import { format } from "date-fns";
import { getTimeInfo } from "@/lib/utils";
import Dialog from "@/components/customdialog";
import { DeleteIcon, EditIcon } from "@/assets/icons";
import { FileDisplay } from "@/components/customdialog/fileDisplay";
import { Button, buttonVariants } from "@/components/ui/button";
import { Toaster } from "../../Toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
interface CorporateRequest {
  id: string;
  name: string;
  registrationNumber: string;
  status: string;
  createdAt: string;
  createdBy: string;
  document?: string;
}

const CorporateRequestInfo = ({ formInfo }: { formInfo: any }) => {
  const [requests, setRequests] = useState<CorporateRequest[]>([]);
  const [showResultDialog, setShowResultDialog] = useState(false);
  const [deleteResultDialog, setDeleteResultDialog] = useState(false)

  const adminEmail="bamidelesayo1@sidebrief.com"
  const { data, isLoading } = useQuery(
    ['viewEnterpriseByEmail', adminEmail],
    () => viewEnterpriseByEmail(adminEmail)
  );
  // const { data, isLoading } = useQuery(["allDiligenceRequests"], viewAllRequests);


  const queryClient = useQueryClient();

  const { 
    mutate: deleteRequests} = useMutation( deleteRequest, { 
    onSuccess: () => {
      setDeleteResultDialog(false)
      queryClient.invalidateQueries(["viewEnterpriseByEmail"]);
    },
    onError: (error) => {
    }
  });
  
  const { 
    mutate: updateRequests } = useMutation(updateRequest, { 
    onSuccess: () => {
      // console.log("Request updated successfully");
      // Do something with updatedData if needed
      queryClient.invalidateQueries(["viewEnterpriseByEmail"]);
    },
    onError: (error) => {
      console.log("Error updating request:", error);  
    }
});

 
 

  useEffect(() => {
    setRequests(data?.data?.data?.diligenceRequest);
  }, [data]);

  

  const showResult = () => {
    setShowResultDialog(true);
  };


  const cancelResult = () => {
    setShowResultDialog(prev => !prev);
  };

  const showDelete = () => {
    setDeleteResultDialog(true)
  }

  const cancelDelete = () => {
    setDeleteResultDialog(prev => !prev);
  }

  const formattedStatus = (status: string, id: string) => {
    if (status === "Unverified") {
      return (
        <div className="flex items-center gap-6">
          <Image src={EditIcon} alt="edit" className="w-4 h-4 cursor-pointer" />
          <Image
            src={DeleteIcon}
            alt="delete"
            className="w-4 h-4 cursor-pointer"
            onClick={showDelete}
          />
          <div className="text-center">
              <Dialog
                open={deleteResultDialog}
                cancel={cancelDelete}
                dialogType="state"
                title="Are you sure you want to delete this request?"
                brandColor="red"
                footer={false}
              >
                <div className="flex items-center justify-center gap-4">
                  <Button type="submit" variant="secondary" onClick={() => deleteRequests(id)}>
                    Delete
                  </Button>

                  <Button type="submit" variant="outline" >
                    Cancel
                  </Button>
                </div>
              </Dialog>
            </div>
        </div>
      )
    } else if (status === "In Progress") {
      return <h6 className="text-[#469c30] underline">In Progress</h6>
    } else if (status === "Verified") {
      return <h6 className="text-[#6975f9]">Verified</h6>
    
    } else if (status === "Completed") {
      return (
        <>
          <h6 className="text-[#DE4A09] cursor-pointer underline" onClick={showResult}>
            See Result
          </h6>
          <div>
            <Dialog
              open={showResultDialog}
              cancel={cancelResult}
              dialogType="state"
              title="Verification succeessful"
              description={`Your request has been verified successfully`}
              brandColor="red"
              footer={false}
            >
              <FileDisplay>
                CAC Certificate
              </FileDisplay>
            </Dialog>
          </div>
        </>
      );
    } else {
      status;
    }
  };

  const headers = [
    "S/N",
    "Business name",
    "Business reg number",
    "Requested by",
    "Date",
    "Time",
    "Action",
  ];

  const dataBody = requests?.map((request, index) => {
    const formattedDate = format(new Date(request?.createdAt), "dd/MM/yyyy");
    const formattedTime = getTimeInfo(request?.createdAt);

    return [
      numeral(index + 1).format("00"),
      request?.name,
      request?.registrationNumber,
      request?.createdBy,
      formattedDate,
      formattedTime,
      // request?.status
      formattedStatus(request?.status, request?.id),
    ];
  });

  return (
    <div>
      {isLoading ? (
        <div className="h-10 text-center">Loading...</div>
      ) : requests?.length === 0 ? (
        <div className="text-center">
          <EmptyList />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-8 pl-10 pr-6">
            <ActiveNav title="Search History" path="/history" />
            <ActiveNav title="Pending Verifications" path="/pending" />
            <ActiveNav title="Ongoing Verifications" path="/ongoing" />
          </div>

          <div>
            <DiligenceTable header={headers} body={dataBody} lastColumnCursor link={true} />
          </div>
          {/* 
          <Dialog
            dialogType="normal"
            triggerText={props.triggerText}
          footer={false}
          /> */}
        </>
      )}
    </div>
  );
};

export default CorporateRequestInfo;
