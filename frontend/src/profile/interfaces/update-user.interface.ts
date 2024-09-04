export interface UpdateUserRequest {
    id: number;
    body: {
        name?: string,
        email?: string,
        password?: string;
    }
}