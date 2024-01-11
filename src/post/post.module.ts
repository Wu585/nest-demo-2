import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TestService } from "./test.service";

@Module({
  controllers: [PostController],
  providers: [PostService,TestService],
  exports:[TestService]
})
export class PostModule {}
