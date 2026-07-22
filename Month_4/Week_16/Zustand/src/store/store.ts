import {create} from "zustand/react";
import {createUserSlice} from "@/store/user-slice";
import type {Store} from "@/types/store.ts";
import {immer} from "zustand/middleware/immer";
import {createCartSlice} from "@/store/cart-slice.ts";
import {devtools, persist} from "zustand/middleware";
import {subscribeWithSelector} from "zustand/middleware";

export const useStore = create<Store>()(
    devtools(
        persist(subscribeWithSelector(
            immer((...a)=> ({
            ...createUserSlice(...a),
            ...createCartSlice(...a)
        }))
            ),{
                name: "store",
            }
        )
    )
)