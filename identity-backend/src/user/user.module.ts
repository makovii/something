import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepoProvider } from './repository/user-repo.provider';
import { User, UserSchema } from './repository/user.model';
import { UserEntity } from './entity/user.entity';
import { UserService } from './service/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserRepoProvider, UserEntity, UserService],
  exports: [UserRepoProvider, UserEntity, UserService],
})
export class UserModule {}
