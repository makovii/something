import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';


@Controller('user')
export class UserController {
  constructor(private userEntity: UserEntity) {}

  @Get('/me')
  // @UseGuards(JwtAuthGuard)
  async getMe(@Req() userJwt: any) {

  }

}
