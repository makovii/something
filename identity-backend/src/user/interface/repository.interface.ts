import { UserEntity } from "../entiry/user.entity";

export interface IUserRepository {
  getMe(id: string): Promise<UserEntity>;
}
