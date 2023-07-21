import Search from '@/components/Feautures/Search'
import DiligenceTable from '@/components/Feautures/DiligenceTable'
import {
  bodyFullData,
  dataBody,
  header,
} from '@/components/Feautures/DiligenceTable/constant'
import React from 'react'

const Login = () => {
  return (
    <div>
     <DiligenceTable
       header={header}
      bodyFullData={bodyFullData}
      body={dataBody}

    />

    <Search />
    </div>
  )
}

export default Login
