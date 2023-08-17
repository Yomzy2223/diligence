export interface RegInfo {
  requestId: string;
  regNo: string;
  regName: string;
  searchValue: string;
}

export interface RequestType {
  regInfo: RegInfo;
  setRegInfo: React.Dispatch<React.SetStateAction<RegInfo>>;
}

export const allStatus = [
  { text: "Search History", path: "/requests/all" },
  { text: "Unverified ", path: "/requests/unverified" },
  { text: "In-Progress", path: "/requests/verified" },
  { text: "Completed", path: "/requests/completed" },
];
