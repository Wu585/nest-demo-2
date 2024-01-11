import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CodeModule } from './code/code.module';
import { OpenaiModule } from './openai/openai.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UserModule, PostModule, CodeModule, OpenaiModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
