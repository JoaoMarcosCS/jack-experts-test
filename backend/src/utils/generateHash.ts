import * as bcrypt from "bcrypt"

export async function generateHash(password: string){
    const hash = await bcrypt.hash(password, 10);
    return hash;
}