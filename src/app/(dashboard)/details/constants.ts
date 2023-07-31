export const headers = [
    'S/N',
    'Date added',
    'Branch name',
    'Branch state',
    'Branch Manager',
    'Branch Manager email',
  ]

  export const bodyFullData = [
    {
      Date: '02/08/23',
      BranchName: 'Idumota',
      BranchState: 'Abia state ',
      BranchManager: 'Odus Ola',
       Email: 'Odusola@gmail.com',
    },
    {
      Date: '02/06/23',
      BranchName: 'Ijebu-ode',
      BranchState: 'Lagos state ',
      BranchManager: 'Odus Ola',
      Email: 'Odusola@gmail.com',
    },
    {
      Date: '02/05/23',
      BranchName: 'Idumota',
      BranchState: 'Delata state ',
      BranchManager: 'Odus Ola',
      Email: 'Odusola@gmail.com',
    },
    {
      Date: '02/04/23',
      BranchName: 'Festac',
      BranchState: 'Abia state ',
      BranchManager: 'Odus Ola',
      Email: 'Odusola@gmail.com',
    },
    {
      Date: '02/03/23',
      BranchName: 'Egbeda Idimu',
      BranchState: 'Oyo state ',
      BranchManager: 'Odus Ola',
      Email: 'Odusola@gmail.com',
    },
  ]

  export const dataBody = bodyFullData?.map((el, index) => [
    index + 1,
    el?.Date,
    el?.BranchName,
    el?.BranchState,
    el?.BranchManager,
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
    name :'drafts',
    length : 3
  }

  ]