export const header = [
    'S/N',
    'Date ',
    'Business name',
    'Business Number',
    'Uploaded By',
    'Status',
  ]
  export const bodyFullData = [
    {
      Date: '02/08/23',
      BusinessName: 'Tomiwa Oil & Gas',
      BusinessNumber: '56874ght765',
      UploadedBy: 'asumo@fbn.com',
      Status: 'Under review',
    },
    {
      Date: '02/08/23',
      BusinessName: 'Tomiwa Oil & Gas',
      BusinessNumber: '56874ght765',
      UploadedBy: 'asumo@fbn.com',
      Status: 'Under review',
    },
    {
      Date: '02/08/23',
      BusinessName: 'Tomiwa Oil & Gas',
      BusinessNumber: '56874ght765',
      UploadedBy: 'asumo@fbn.com',
      Status: 'Completed',
    },
    {
      Date: '02/08/23',
      BusinessName: 'Tomiwa Oil & Gas',
      BusinessNumber: '56874ght765',
      UploadedBy: 'asumo@fbn.com',
      Status: 'Under review',
    },
    {
      Date: '02/08/23',
      BusinessName: 'Tomiwa Oil & Gas',
      BusinessNumber: '56874ght765',
      UploadedBy: 'asumo@fbn.com',
      Status: 'Paid',
    },
  ]

  export const dataBody = bodyFullData?.map((el, index) => [
    index + 1,
    el?.Date,
    el?.BusinessName,
    el?.BusinessNumber,
    el?.UploadedBy,
    el?.Status,
  ])