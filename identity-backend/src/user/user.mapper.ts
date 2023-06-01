import { UserFromJwt } from "../userFromJwt";
import { UserDto } from "./controller/dto/user.dto";
import { UserEntity } from "./entity/user.entity";
import { UserDocument } from "./repository/user.model";
import { UserRepository } from "./repository/user.repository";
import { UserService } from "./service/user.service";


export class UserMapper {
  public static RepositoryToEntity(
    origin: UserDocument,
    context: UserRepository,
    service: UserService
    ): UserEntity {
    const newUser = new UserEntity(context, service);

    newUser.id = origin.id;
    newUser.auth_id = origin.auth_id;
    newUser.phone = origin.phone;

    return newUser;
  }

  public static EntityToDto(origin: UserEntity, userJwt: UserFromJwt): UserDto {
    const dto = new UserDto();
    dto.auth_id = origin.auth_id;
    dto.name = userJwt.name;
    dto.email = userJwt.email;
    
    return dto;
  }
}
