import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { inject, injectable } from "inversify";
import { CONTAINER_TYPES } from '../container/TYPES';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(
    @inject(CONTAINER_TYPES.UserService) private readonly userService: UserService,
  ) {}

  @Get('/me')
  // @UseGuards(JwtAuthGuard)
  async getMe(@Req() userJwt: any) {

  }

}
