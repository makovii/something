import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthEntity } from './entity/auth.entity';
import { AuthRepoProvider } from './repository/auth-repo.provider';
import { Auth, AuthSchema } from './repository/auth.model';
import { JwtStrategy } from './strategies/jwt.strategy';
import * as env from 'env-var';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  providers: [AuthRepoProvider, AuthEntity, JwtStrategy],
  exports: [AuthRepoProvider, AuthEntity],
})
export class AuthModule {}