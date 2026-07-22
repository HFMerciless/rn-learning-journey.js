import { type StateCreator } from "zustand";
import type { Store } from "@/types/store";

type UserState = {
    userName: string;
    fullName: string;
    age: number;
    address: string;
    setAddress: (address: string) => void;
};

type UserActions = {
    setAddress: (address: string) => void;
    fetchUser: () => Promise<void>  ;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<
    Store, // 👈 2. Change this from UserSlice to Store
    [["zustand/immer", never]],
    [],
    UserSlice
> = (set) => ({
    address: "a",
    age: 0,
    fullName: "",
    userName: "",
    setAddress: (address) => set({ address }),
    fetchUser: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set({
            address: "",
            age: 25,
            fullName: "John Doeda",
            userName: "johndoe.com",
            }
        )
    }
});

/*
const useCountStore = create<{
    nested:{count:number}; inc: ()=> void }>((set)=>({
    nested:{count:0},
    inc:()=>
        set((state)=>({
            nested:{...state.nested, count:state.nested.count+1}
        }))
    }))*/
