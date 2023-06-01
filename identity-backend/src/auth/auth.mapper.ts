import { JwtService } from "@nestjs/jwt";

import { AuthDto } from "./controller/dto/auth.dto";
import { AuthEntity } from "./entity/auth.entity";
import { AuthDocument } from "./repository/auth.model";
import { AuthRepository } from "./repository/auth.repository";


export class AuthMapper {
  public static RepositoryToEntity(origin: AuthDocument, context: AuthRepository): AuthEntity {
    const newUser = new AuthEntity(context, new JwtService);

    newUser.id = origin.id;
    newUser.name = origin.name;
    newUser.email = origin.email;
    newUser.password= origin.password;

    return newUser;
  }

  public static EntityToDto(origin: AuthEntity): AuthDto {
    const dto = new AuthDto();
    dto.name = origin.name;
    dto.email = origin.email;
    dto.password = origin.password;

    return dto;
  }
}
