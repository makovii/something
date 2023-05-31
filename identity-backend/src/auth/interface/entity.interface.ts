import { HttpException, UnauthorizedException } from "@nestjs/common";
import { Auth } from "../repository/auth.model";

export interface IAuthEntity {
  registration(name: string, email: string, password: string): Promise<Auth | HttpException>,

  login(email: string, password: string): Promise<string | UnauthorizedException>,
}