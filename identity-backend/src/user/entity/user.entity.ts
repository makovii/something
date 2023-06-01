import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "../interface/repository.interface";
import { IUserEntity } from "../interface/entity.interface";
import { UserService } from "../service/user.service";
import { Auth } from "../../auth/repository/auth.model";

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserEntity implements IUserEntity {
  constructor(
    @UserRepo() private userRepository: IUserRepository,
    private userService: UserService) {}

  _id: string;
  _auth_id: Auth;
  _phone: string;
  // other user fields

  get id(): string {
    return this._id;
  }
  set id(v: string) {
    this._id = v;
  }

  get auth_id(): Auth {
    return this._auth_id;
  }
  set auth_id(v: Auth) {
    this._auth_id = v;
  }

  get phone(): string {
    return this._phone
  }
  set phone(phone: string) {
    this._phone = phone
  }

  async getMe(id: string): Promise<UserEntity> {
    return this.userRepository.getMe(id);
    // to do some business logic. call serivice, repository, another method 
  }

}
