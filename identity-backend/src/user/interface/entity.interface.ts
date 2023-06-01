import { UserEntity } from "../entity/user.entity";


export interface IUserEntity {
  getMe(id: string): Promise<UserEntity>;
}
