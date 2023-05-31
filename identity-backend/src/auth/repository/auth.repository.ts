import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAuthRepository } from "../interface/repository.interface";
import { AuthEntity } from "../entity/auth.entity";
import { AuthMapper } from "../auth.mapper";
import { Auth, AuthDocument } from "./auth.model";

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(@InjectModel('Auth') private authModel: Model<Auth>) {}

  public async createUser(email: string, name: string, password: string): Promise<AuthEntity> {
    const newUser = await this.authModel.create({ email, name, password });
    const entity = AuthMapper.RepositoryToEntity(newUser, this);

    return entity;
  }

  public async getUserByEmail(email: string): Promise<AuthEntity> | null {
    const newUser: AuthDocument | null = await this.authModel.findOne({ email });
    if (newUser === null) return null;
    const entity = AuthMapper.RepositoryToEntity(newUser, this);

    return entity;
  }
}
