export const headers = [
    'S/N',
    'Date added',
    'Branch name',
    'Branch state',
    
    'Branch Manager email',
  ]

  export const bodyFullData = [
    {
      Date: '02/08/23',
      BranchName: 'Idumota',
      BranchState: 'Abia state ',
      
       Email: 'Odusola@gmail.com',
    },
    {
      Date: '02/06/23',
      BranchName: 'Ijebu-ode',
      BranchState: 'Lagos state ',
      
      Email: 'Odusola@gmail.com',
    },
    {
      Date: '02/05/23',
      BranchName: 'Idumota',
      BranchState: 'Delata state ',
      
      Email: 'Odusola@gmail.com',
    },
    {
      Date: '02/04/23',
      BranchName: 'Festac',
      BranchState: 'Abia state ',
      
      Email: 'Odusola@gmail.com',
    },
    {
      Date: '02/03/23',
      BranchName: 'Egbeda Idimu',
      BranchState: 'Oyo state ',
     
      Email: 'Odusola@gmail.com',
    },
  ]

  export const dataBody = bodyFullData?.map((el, index) => [
    index + 1,
    el?.Date,
    el?.BranchName,
    el?.BranchState,
  
    el?.Email,
  ])



  interface TabProps {
    name: string;
    length: number;
  }
  export const Tab : TabProps[]=[
    {
    name :'Onboarded branch(es)',
    length : 5
  },
  {
    name :'Drafts',
    length : 3
  }

  ]