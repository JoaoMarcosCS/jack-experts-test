import { UserStore } from "../interfaces/user-store.interface"
import { create } from "zustand"

export interface ErrorObject {
    error: string;
}

// export interface ErrorState {
//     error: ErrorObject  | null;
//     setError: (error: ErrorObject  | null) => void;
// }

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

// export const useErrorState = create<ErrorState>((set) => {
//     return {
//         error: null,
//         setError: (error: ErrorObject | null) => set({ error }),
//     }
// })