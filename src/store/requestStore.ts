import { create } from "zustand";
// import { shallow } from "zustand/shallow";
import { persist, createJSONStorage } from "zustand/middleware";

interface storeType {
  requestId: string;
  regName: string;
  regNo: string;
  regType: string;
  searchValue: string;
}

interface storeMainType extends storeType {
  setRequestId: (requestId: string) => void;
  setRegNo: (regNo: string) => void;
  setRegName: (regName: string) => void;
  setSearchValue: (searchValue: string) => void;
  setRegType: (regType: string) => void;
}

export const useRequestStore = create<storeMainType, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      requestId: "",
      regName: "",
      regNo: "",
      regType: "",
      searchValue: "",

      setRequestId: (requestId: string) =>
        set((state: storeType) => ({
          ...state,
          requestId,
        })),

      setRegName: (regName: string) =>
        set((state: storeType) => ({
          ...state,
          regName,
        })),

      setRegNo: (regNo: string) =>
        set((state: storeType) => ({
          ...state,
          regNo,
        })),

      setRegType: (regType: string) => {
        set((state: storeType) => ({
          ...state,
          regType,
        }));
      },

      setSearchValue: (searchValue: string) =>
        set((state: storeType) => ({
          ...state,
          searchValue: searchValue.toLowerCase(),
        })),
    }),
    {
      name: "request-store", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
