export interface RegStateType {
  requestId: string;
  regNo: string;
  regName: string;
  searchValue: string;
  refetchData: boolean;
}

export interface RequestType {
  regState: RegStateType;
  setRegState: React.Dispatch<React.SetStateAction<RegStateType>>;
}

export const allStatus = [
  { text: "Search History", path: "/requests/all" },
  { text: "Unverified ", path: "/requests/unverified" },
  { text: "In-Progress", path: "/requests/verified" },
  { text: "Completed", path: "/requests/completed" },
];
