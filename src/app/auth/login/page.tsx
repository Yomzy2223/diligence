import Search from '@/components/features/Search'
import { DiligenceTable } from '@/components/features/DiligenceTable'
import {
  bodyFullData,
  dataBody,
  headers,
} from '@/components/features/DiligenceTable/constant'
import React from 'react'

const Login = () => {
  return (
    <div>
     <DiligenceTable
       header={headers}
      bodyFullData={bodyFullData}
      body={dataBody}

    />

    <Search />
    </div>
  )
}

export default Login
