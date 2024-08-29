import { UserStore } from "@/interfaces/user-store.interface"
import { create } from "zustand"


export const useCartStore = create<UserStore>((set) => {
    return {
        user:  null,
        updateUser: (user) => set((state) => ({
            user: user
        })),
        removeUser: (user) => set((state) => ({
            user: null
        }))
    }
})