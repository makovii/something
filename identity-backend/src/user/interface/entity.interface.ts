import { UserEntity } from "../entiry/user.entity";


export interface IUserEntity {
  getMe(id: string): Promise<UserEntity>;
}
