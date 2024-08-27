import { User } from "../../entities/user.entity";


export interface UserDto{
    name: string;
    email: string;
}

export function parseUserDto(user: User): UserDto{
    return{ 
        email: user.email,
        name: user.name,
    }
}