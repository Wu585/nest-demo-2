import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TestService } from "../post/test.service";

@Module({
  imports:[],
  controllers: [UserController],
  providers: [UserService,TestService],
})
export class UserModule {}
