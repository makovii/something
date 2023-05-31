import { Body, Controller, Get, HttpException, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthMapper } from '../auth.mapper';
import { AuthEntity } from '../entity/auth.entity';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { AuthDto } from './dto/auth.dto';
import * as env from 'env-var';

@Controller('auth')
export class AuthController {
  constructor(private authEntity: AuthEntity) {}

  @Post('/registration')
  async registrationAuth(@Body() input: AuthDto): Promise<AuthDto | HttpException> {
    const entity = await this.authEntity.registration(input.email, input.name, input.password);
    
    if(entity.name === "HttpException") return entity;
    const dto: AuthDto = AuthMapper.EntityToDto(entity as AuthEntity);
    return dto;
  }

  @Get('/login')
  login(@Body() input: Partial<AuthDto>): Promise<string | UnauthorizedException> {
    return this.authEntity.login(input.email, input.password);
  }

}
