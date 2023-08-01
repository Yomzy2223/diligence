'use client'

import { DiligenceTable } from '@/components/features/DiligenceTable'
import { dataBody, headers } from '@/components/features/DiligenceTable/constant'
import React from 'react'

const Test = () => {

    //testing the oncellclick and onrowclick events
    const handleCellClick = (el:any) => {
        console.log(el)
        // Handle the cell click event with the dynamic rowData
;
      };
  return (
    
    <div>
      <DiligenceTable
      header={headers}
      body={dataBody}
      rowCursor
      onRowClick={handleCellClick}
    />
    </div>
  )
}

export default Test
