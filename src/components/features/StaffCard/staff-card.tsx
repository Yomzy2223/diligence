"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

export const StaffCard  =() => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Popover>
            <PopoverTrigger>Add Staff</PopoverTrigger>
            <PopoverContent>
                <Card className="w-[250%] h-[100vh] m-4">
                    <CardHeader>
                    <div className="flex justify-between">
                        <div>
                            <CardTitle>Add Staff</CardTitle>
                        </div>
                    
                    <div className="ml-auto">
                            <button onClick={handleClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                X
                            </button>
                    </div>
                    
                    </div>
                    
                    </CardHeader>
                    <CardContent>
                    <div className="flex flex-col space-y-4 my-3">

                        <Input placeholder="Enter Staff Name"  />

                        <Input placeholder="Enter Staff Email Address"  />
                       
                    </div>
                    <div className= "text-[#DE4A09] space-y-5 font-bold underline">Add</div>

                    <div className="mt-5">
                        <h2 className="font-semibold text-xl py-4">
                            Members added are only allowed to make request for verifications
                        </h2>

                        <div className="space-y-4">
                            <h4 className="text-md font-semibold">List of added members</h4>
                            
                            <div className="grid gap-6">
                                <div className="flex items-center justify-between space-x-4">
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm font-medium leading-none">
                                            Sola@gtbank.com
                                        </p>
                                    </div>
                                    <div>
                                        <Button className="bg-[#C54130] border-2">Remove</Button>
                                    </div>
                                </div>
                            </div>

                         

                            <div className="grid gap-6">
                                <div className="flex items-center justify-between space-x-4">
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm font-medium leading-none">
                                            Sola@gtbank.com
                                        </p>
                                    </div>

                                    <div>
                                        <Button className="bg-[#C54130] border-2 ">Remove</Button>
                                    </div>
                                </div>       
                            </div>

                        </div>
                        
                        <Button className="bg-[#DE4A09] mt-5 float-right" >Done</Button>    
                    </div>
                    </CardContent>
                </Card>
            </PopoverContent>
        </Popover>
   
    )
}