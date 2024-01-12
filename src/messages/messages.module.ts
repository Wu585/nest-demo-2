import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import {OpenaiModule} from "../openai/openai.module";
import { ResponseInterceptor } from "../interceptors/response.interceptor";

@Module({
  imports:[OpenaiModule],
  controllers: [MessagesController],
  providers: [MessagesService,],
})
export class MessagesModule {}
