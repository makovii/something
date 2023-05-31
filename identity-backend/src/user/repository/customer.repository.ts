import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Document, Model, Types } from "mongoose";
import { IUserRepository } from "../interface/repository.interface";
import { UserEntity } from "../entiry/user.entity";
import { UserService } from "../service/user.service";
import { User } from "./customer.model";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private userService: UserService,
  ) {}

  async getMe(id: string): Promise<UserEntity> {
    let newUser;
    
    let exist = await this.userModel.findOne({ auth_id: id });
    if (!exist) {
      newUser = await this.userModel.create({ auth_id: id });
    } else {
      newUser = exist;
    }

    return newUser;
  }
}
