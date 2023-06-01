import { Module } from '@nestjs/common';
import { UserController } from './user/controller/user.controller';
import { UserService } from './user/service/user.service';
import * as env from 'env-var';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/controller/auth.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    MongooseModule.forRoot(env.get('MONGO_URI').required().asString()),
    UserModule,
    AuthModule,
  ],
  controllers: [
    AuthController,
    UserController,
  ],
  providers: [],
})
export class AppModule {}
