import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Document, Model, Types } from "mongoose";
import { IUserRepository } from "../interface/repository.interface";
import { UserEntity } from "../entity/user.entity";
import { UserService } from "../service/user.service";
import { User } from "./user.model";
import { CONTAINER_TYPES } from "../container/TYPES";
import { inject, injectable } from "inversify";
import { UserMapper } from "../user.mapper";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @inject(CONTAINER_TYPES.UserService) private readonly userService: UserService,
  ) {}

  async getMe(id: string): Promise<UserEntity> {
    let newUser;
    
    let exist = await this.userModel.findOne({ auth_id: id });
    if (!exist) {
      newUser = await this.userModel.create({ auth_id: id });
    } else {
      newUser = exist;
    }
    const user = UserMapper.RepositoryToEntity(newUser, this, this.userService);
    return user;
  }
}
