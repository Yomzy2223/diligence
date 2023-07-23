import Search from '@/components/Feautures/Search'
import { DiligenceTable } from '@/components/Feautures/DiligenceTable'
import {
  bodyFullData,
  dataBody,
  headers,
} from '@/components/Feautures/DiligenceTable/constant'
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
