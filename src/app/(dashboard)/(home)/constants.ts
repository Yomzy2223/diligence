export interface RegStateType {
  requestId: string;
  regNo: string;
  regName: string;
  searchValue: string;
  refetchData: boolean;
}

export const allStatus = [
  { text: "Search History", path: "/requests/all" },
  { text: "Awaiting-Approval ", path: "/requests/unverified" },
  { text: "In-Progress", path: "/requests/verified" },
  { text: "Completed", path: "/requests/completed" },
];
