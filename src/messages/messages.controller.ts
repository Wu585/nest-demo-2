import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from "@nestjs/common";
import {MessagesService} from './messages.service';
import {CreateMessageDto} from './dto/create-message.dto';
import {UpdateMessageDto} from './dto/update-message.dto';
import {OpenaiService} from "../openai/openai.service";
import { ResponseInterceptor } from "../interceptors/response.interceptor";

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService, private readonly openAiService: OpenaiService) {
  }

  @Post()
  @UseInterceptors(ResponseInterceptor)
  async create(@Body() createMessageDto: CreateMessageDto) {
    const response = await this.openAiService.createChatCompletion([
      {role: "user", content: createMessageDto.content}
    ])
    return response.content;
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messagesService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
