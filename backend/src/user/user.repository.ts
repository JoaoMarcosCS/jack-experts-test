import { DataSource } from "typeorm";
import {  parseUserDto, UserDto } from "./interfaces/user.dto";
import { User } from "./user.entity";
import { UpdateUserDto } from "./interfaces/update-user.dto";

export class userRepository {

  constructor(
    private readonly DataSource: DataSource
  ) { }

  async findOne(email: string): Promise<UserDto | null> {
    const data = await this.DataSource.manager.findOne(User, {
      where: {
        email: email
      }
    })

    if (!data) return null

    return parseUserDto(data);
  }

  // async update(params: UpdateUserDto): Promise<UserDto | boolean>{
  //   const data = await this.DataSource.createQueryBuilder
  // }
}
