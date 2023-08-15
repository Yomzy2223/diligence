
import React from 'react'
import { BankSettingInfo } from "@/components/features/BankSettingInfo"
import { SettingContext } from "@/components/features/settingContext"
import Image from "next/image";
import gtbankImg from "@/assets/images/Gtbank.svg";
import MainHeader from '@/components/header/mainHeader'; 
import Sidebar from '@/components/features/sidebar';
import InvoicePage from '../invoice/page';
export default function Settings () {
 
  return (
    <>
     <div className="flex flex-col h-screen">
      <MainHeader />
      <div className="flex flex-1 ">
        <div>
          <Sidebar />
        </div>
        <div className="w-full max-h-[calc(100vh-61px)] overflow-auto ">
        <main className="flex flex-col ml-4 px-6 ">
          <div className="flex items-center gap-4 py-4 ">
            <Image src={gtbankImg} alt="" />
            <div className="flex flex-1 justify-between">
              <p className="text-2xl font-normal ">Settings</p>
            </div>
          </div>

          <div className='my-10'>
            <BankSettingInfo
              name={"Guaranty Trust Bank"}
              image={gtbankImg}
              address={"No, 51 West side street"}
              adminName={"Mr. Oluwole"}
              adminEmail={"Mr. Oluwole@gmail.com"}
              regUrl="https/www/sidebrief.diligence/gtbank.com"
            />
          </div>

          <div className='my-7'>
            <SettingContext/>
          </div> 

          <InvoicePage/>
        </main>
        </div>
      </div>
    </div>  
   </>
  )
   
    
}