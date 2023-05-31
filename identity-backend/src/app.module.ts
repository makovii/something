import { Module } from '@nestjs/common';

import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
