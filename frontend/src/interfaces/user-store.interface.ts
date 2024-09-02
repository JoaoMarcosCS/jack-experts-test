export interface UserState {
    name: string ,
    id: number,
    email: string,
    accessToken: string | undefined | null;
}

export interface UserStore {
    user: UserState | null,
    updateUser: (user: UserState) => void;
    removeUser: () => void
}