import { UserStore } from "../interfaces/user-store.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ErrorObject { 
  error: string; 
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      updateUser: (user) => set(() => ({ user })),
      removeUser: () => set(() => ({ user: null })),
    }),
    {
      name: "user-store", // nome da chave no armazenamento
      getStorage: () => localStorage, // você pode trocar para sessionStorage ou outro armazenamento
    }
  )
);
