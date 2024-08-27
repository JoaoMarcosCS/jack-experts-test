import { User } from "../user.entity";

export interface UserDto{
    name: string;
    email: string;
    tasks: {}
}

export function parseUserDto(user: User): UserDto{
    return{ 
        email: user.email,
        name: user.name,
        tasks: user
    }
}