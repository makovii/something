import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import { ENCODING_SALT } from "../../constants";
import * as Response from "../../response";
import { JwtService } from '@nestjs/jwt';
import { IAuthEntity } from "../interface/entity.interface";
import { IAuthRepository } from "../interface/repository.interface";
import { AuthDocument } from "../repository/auth.model";
import * as env from 'env-var';

const AuthRepo = () => Inject('AuthRepo');

@Injectable()
export class AuthEntity implements IAuthEntity {
  constructor(@AuthRepo() private authRepository: IAuthRepository, private jwtService: JwtService) {}

  private _id: number;
  private _name: string;
  private _email: string;
  private _password: string;

  get id(): number {
    return this._id;
  }
  set id(v: number) {
    this._id = v;
  }

  get name(): string {
    return this._name;
  }
  set name(v: string) {
    this._name = v;
  }
  
  get email(): string {
    return this._email;
  }
  set email(v: string) {
    this._email = v;
  }
  
  get password(): string {
    return this._password;
  }
  set password(v: string) {
    this._password = v;
  }

  public async registration(email: string, name: string, password: string): Promise<AuthEntity | HttpException> {
    const sameEmailUser: AuthEntity = await this.authRepository.getUserByEmail(email);
    if (sameEmailUser) {
      return new HttpException(Response.SAME_EMAIL, HttpStatus.BAD_REQUEST);
    }
    const hashPassword: string = await bcrypt.hash(password, ENCODING_SALT);

    const user: AuthEntity = await this.authRepository.createUser(email, name, hashPassword);
    delete user.password;

    return user;
  }

  public async login(email: string, password: string): Promise<string | UnauthorizedException> {
    const user = await this.authRepository.getUserByEmail(email);
    if (!user) {
      return new UnauthorizedException(Response.WRONG_EMAIL_OR_PASS);
    }
    const passwordEqual = await bcrypt.compare(password, user.password);
    if (!passwordEqual) {
      return new UnauthorizedException(Response.WRONG_EMAIL_OR_PASS);
    }

    const payload: Partial<AuthDocument> = {
      id: user._id,
      name: user._name,
      email: user._email,
    };
    
    return this.jwtService.sign(payload)
  }
}
