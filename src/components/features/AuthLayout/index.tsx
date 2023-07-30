
import { Children, ReactNode } from "react";

import Image from "next/image";

import sidebriefLogo from '@/assets/png/sidebriefLogo.png'

import AuthBg from '@/assets/svg/AuthBg.svg'


interface authLayoutProps {
	children: ReactNode;
  title: string;
}


export const AuthLayout = ( { children, title='Create account'}: authLayoutProps )=> {
  return (
    
       <div className="min-h-screen w-full flex justify-center items-center">
    <div className="flex w-full justify-center items-center ">
<div className="flex flex-col justify-center max-w-[429px] w-full">
<div className="flex  mb-14 items-center">
<Image  src={sidebriefLogo} alt="logo"/> 
</div>
<p className="text-2xl mb-8 not-italic font-normal leading-[130%] text-gray-900">
{title}
</p>
<div >


{children}

</div>
</div>

    </div>
    <div className="sticky w-full top-0 right-0 h-screen">
    <Image src={AuthBg} alt="background" className="object-cover" fill />
			
      </div>

    </div>
  )
}


