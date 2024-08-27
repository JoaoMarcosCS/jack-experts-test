import {  parseUserDto, UserDto } from "./interfaces/user.dto";

import { AppDataSource } from "../database/config/data-source";
import { CreateUserDto } from "./validations/create-user";
import { UpdateUserDto } from "./validations/update-user";
import { User } from "../entities/user.entity";

class UserRepository {

  async create(data: CreateUserDto): Promise<boolean>{
      const command = await AppDataSource.manager.createQueryBuilder()
      .insert()
      .into(User)
      .values(data)
      .execute()

      if(!command.identifiers) return false;

      return true;
  }

  async findById(id: number): Promise<UserDto | null> {
    const data = await AppDataSource.manager.findOne(User, {
      where: {
        id: id
      }
    })

    if (!data) return null

    return parseUserDto(data);
  }

  async findByEmail(email: string): Promise<UserDto | null> {
    const data = await AppDataSource.manager.findOne(User, {
      where: {
        email: email
      }
    })

    if (!data) return null

    return parseUserDto(data);
  }

  async update(id:number, updateData: UpdateUserDto): Promise<boolean>{
    console.log(updateData);
    const command = await AppDataSource.createQueryBuilder()
    .update(User)
    .set(updateData)
    .where("id = :id",{id: id})
    .execute()

    if(command.affected === 0) return false;

    return true;
  }

  async delete(id: number): Promise<boolean>{
    const command = await AppDataSource.createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", { id: id})
    .execute()

    if(command.affected === 0) return false;

    return true;
  }
}

export default new UserRepository();