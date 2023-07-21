import React from 'react'
import searchIcon from '@/assets/svg/searchIcon.svg'
import { Input } from "@/components/ui/input"
import Image from 'next/image'

interface SearchProps {
  placeholderValue?: string
}

const Search = ({ placeholderValue = 'Search for anything' }: SearchProps) => {
  return (
    <div className="w-full h-14 rounded-lg border border-[#EDF1F6] flex justify-between items-center px-4 py-4">
      <Input
        placeholder={placeholderValue}
        className="w-[90%]  text-sm not-italic font-normal leading-5 text-gray-700 border border-none outline outline-none bg-transparent placeholder-shown:text-red"
      />

      <div className="w-10 h-10 rounded-full cursor-pointer bg-[#DE4A09] flex justify-center item-center">
        <Image src={searchIcon} alt="Search" width={20} height={20} />
      </div>
    </div>
  )
}

export default Search
