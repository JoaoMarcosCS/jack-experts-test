import { UserStore } from "../interfaces/user-store.interface"
import { create } from "zustand"

export interface ErrorObject {
    error: string;
}

export const useUserStore = create<UserStore>((set) => {
    return {
        user: null,
        updateUser: (user) => set((state) => ({
            user: user
        })),
        removeUser: (user) => set((state) => ({
            user: null
        }))
    }
})
