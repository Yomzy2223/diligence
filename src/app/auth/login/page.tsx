import Search from '@/components/Feautures/Search'
import Table from '@/components/Feautures/Tables'
import {
  bodyFullData,
  dataBody,
  header,
} from '@/components/Feautures/Tables/constant'
import React from 'react'

const Login = () => {
  return (
    <div>
     <Table
       header={header}
      bodyFullData={bodyFullData}
      body={dataBody}

    />

    <Search />
    </div>
  )
}

export default Login
