import React, { useState, useEffect } from 'react';
import { ActiveNav } from '@/components/features/activeNav'
import Image from "next/image"
import { DiligenceTable } from '../../DiligenceTable'
import { EmptyList } from '../../emptyList'
import { useQuery , useMutation, useQueryClient} from "@tanstack/react-query";
import { viewAllRequests, deleteRequestDocument} from "@/api/requestApi";
import numeral from "numeral";
import { format, parseJSON } from "date-fns";
import { getTimeInfo } from '@/lib/utils';
import Dialog from '@/components/customdialog';
import { DeleteIcon, EditIcon } from '@/assets/icons';
import { FileDisplay } from '@/components/customdialog/fileDisplay';
import { Button , buttonVariants} from '@/components/ui/button';


interface CorporateRequest {
  id: number;
  name: string;
  registrationNumber: string;
  status:string;
  createdAt: string;
  createdBy: string;
  document?: string
}

const CorporateRequestInfo = ({ formInfo }: { formInfo: any }) => {
  const [requests, setRequests] = useState<CorporateRequest[]>([]);
  const [showDeleteDialog, setshowDeleteDialog] = useState(false);
  const [showResultDialog, setShowResultDialog] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

	const toggleDialog = () => {
		setOpenDialog((prev) => !prev);
	};
  const { data, isLoading,  } = useQuery(['allDiligenceRequests'], viewAllRequests);
  console.log("corporate data", data?.data?.data)
  const queryClient = useQueryClient();
  const {
    mutate: deleteRequest,
    isLoading : loading,
    data: requestData,
    isSuccess,
  } = useMutation(() => deleteRequestDocument(formInfo), {
    onSuccess: async () => {
      console.log('Document deleted successfully.');
      await queryClient.invalidateQueries('requests'); 

      // Refresh the list of requests
      const updatedRequests = await viewAllRequests();
      console.log('Updated requests:', updatedRequests);
    },
    onError: (error: string) => {
      console.error('Error deleting document:', error);
    },


  });

  const handleDelete = async () => {
    await deleteRequest();
  };
  

  useEffect(() => {
    setRequests(data?.data?.data) 
  }, [data]);

  

   const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

 const handleDeleteRequest = () => {
    setOpenDialog((prev) => !prev);
 } 

 const showResult = () => {
  setShowResultDialog(true)
 }




 const formattedStatus = (status: string) => {
  if(status === "Unverified") {
    return (
      <div className="flex items-center gap-6">
        <Image src={EditIcon} alt="edit"className="w-4 h-4 cursor-pointer" />
        <Image 
          src={DeleteIcon} 
          alt="delete"
          className="w-4 h-4 cursor-pointer"
          onClick={handleDeleteRequest}
        />
        {showDeleteDialog && 
          <div className='text-center'>
            <Dialog
              open={openDialog}
              cancel={toggleDialog}
              dialogType='state'
              actionText="Submit"
              title='Are you sure you want to delete?'
              brandColor='red'
              
            >
              <div className="flex items-center justify-center gap-4">
                <Button type="submit" variant="secondary" onClick={handleDelete}>
                  Delete
                </Button>
                {/* <Button type="submit" variant="outline" onClick={() => !showDeleteDialog} >
                  Cancel
                </Button> */}

                <Button type="submit" variant="outline">
                  Cancel
                </Button>
               
              </div>
              
            </Dialog>
          </div>
        }
      </div>
    )
  } else if (status === "In Progress") {
    return <u className="text-[#469c30]">In Progress</u>
  } else if ( status === "Completed") {
    return (
      <u className="text-[#DE4A09] cursor-pointer" onClick={showResult}>
        See Result
        { showResultDialog && 
        <div>
            <Dialog
              open={true}
              cancel={handleCloseDialog}
              dialogType='state'
              actionText="Submit"
              title='Verification succeessful'
              description={`Your request has been verified successfully`}
              brandColor='red'
            >
              <FileDisplay>
              {/* {requests?.map((doc) => <span>{doc?.}</span> )} */}
              CAC Certificate
              </FileDisplay>
            </Dialog>
          </div>
      }
      </u>
     
    )
  } else { status }
 }
  
  const headers = [
    'S/N',
    'Business name',
    'Business reg number',
    'Requested by',
    'Date',
    'Time',
    'Action',
  ]

  const dataBody = requests?.map((request, id) => {
    const formattedDate = format(new Date(request?.createdAt), 'dd/MM/yyyy'); 
    const formattedTime = getTimeInfo(request?.createdAt)

  
    return [
      numeral(id + 1).format("00"),
      request?.name,
      request?.registrationNumber,
      request?.createdBy,
      formattedDate,
      formattedTime,
      // request?.status
      formattedStatus(request?.status)
    ];
  });

  console.log("all requests", requests)
  return (

    <div>
      { isLoading ? (
          <div className="text-center h-10">Loading...</div>
      ) : requests?.length === 0 ? (
        <div className="text-center">
          <EmptyList />
        </div>
      ): (
        <>
          <div className="flex items-center gap-8 pl-10 pr-6">
            <ActiveNav
                title="Search History"
                path='/history'
            />
            <ActiveNav
                title="Pending Verifications"
                path='/pending'
            />
            <ActiveNav
                title="Ongoing Verifications"
                path="/ongoing"
            />
          </div>

          <div>
            <DiligenceTable header={headers} body={dataBody} link={true} />
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
  )
}

export default CorporateRequestInfo