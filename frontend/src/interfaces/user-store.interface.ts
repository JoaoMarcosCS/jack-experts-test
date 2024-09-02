export interface UserState {
    name: string ,
    id: number,
    email: string,
    isLoggedIn: boolean;
}

export interface UserStore {
    user: UserState | null,
    updateUser: (user: UserState) => void;
    removeUser: (user: UserState) => void
}