<<<<<<< HEAD
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
=======
'use client'

import { BankInfo } from '@/components/features/BankInfo'
import { Button } from '@/components/ui/button'
import Gtbank from "@/assets/bank/gt-bank-original.png";

import React, { useState } from 'react'
import { Search } from '@/components/features/Search';
import { Tab } from './constants';
import { cn } from '@/lib/utils';
import { DraftTable, OnboardTable } from './tables';

const Details = () => {
    const [activeTab, setActiveTab] = useState('Onboarded branch(es)')

    const handleTabClick = (tab:string) =>{
        setActiveTab(tab);

    }
  return (
    <div>
        <div className="py-4 pl-10 pr-6 w-full border-b border-[#EDF1F6]">
            <div className="w-full flex justify-between items-center h-[71px]">
                <p className="text-2xl font-normal text-gray-900 leading-[130%]"> Onboarded branch(es)</p>
                <div className="flex w-full max-w-[364px] gap-6 justify-center item-center">
                <Button type="submit" variant="orangeOutline" size="full">
                See payment invoice
          </Button>
          <Button type="submit" variant="secondary" size="full">
          Onboard a branch
          </Button>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center w-full px-8 pl-10 pr-6 gap-8">
            <div className="w-full">
            <BankInfo
            image={Gtbank.src}
            name= 'Gtbank'
            branch= {false}
            numberOfOnboardedBranches= {32}
            numberOfBusinesssVerified={12198}
            totalAmountSpent= {289323}
            />
        </div>
        <div className="payment w-full ">

        </div>
        <div className=" w-full border border-[#EDF1F6] rounded p-6">
        <div className="w-full h-14 flex justify-between items-center ">
        <p className="text-xl font-normal text-gray-900 leading-[130%]"> Onboarded branch(es)</p>
        <div className="flex max-w-[373px] w-full h-14">
            <Search/>
        </div>


        </div>
        <div className="flex h-16 w-full  items-center  gap-8">
            {Tab?.map((el:any, index)=>(
                <div onClick ={()=>handleTabClick(el?.name)} key={index} className={cn( 'flex pl-4 h-16 items-center justify-center gap-4',{
                    'border-b-4  border-[#00A2D4]': el?.name ===activeTab
                })}>
                    <p className="text-base not-italic font-normal leading-6">{el?.name}</p>
                    <div className="flex py-1 px-3 flex-col justify-center items-center rounded-[10px] bg-tab">
                        <p className="text-sm not-italic font-normal text-[#00A2D4]">{el?.length}</p>

                    </div>

                </div>
            ))}
        </div>
        <div className="w-full">
            {activeTab==='Onboarded branch(es)' && <OnboardTable/>}
            {activeTab==='drafts' && <DraftTable/>}
            
            
        </div>



</div>


</div>
    </div>
  )
}

export default Details
>>>>>>> origin/staging
