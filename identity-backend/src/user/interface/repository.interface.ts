import { UserEntity } from "../entity/user.entity";

export interface IUserRepository {
  getMe(id: string): Promise<UserEntity>;
}
