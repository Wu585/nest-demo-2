import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  ForbiddenException,
  ParseUUIDPipe
} from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { HttpExceptionFilter } from "../filters/http-exception.filter";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  findAll() {
    throw new ForbiddenException("未认证");
  }

  @Get(":id")
  @UseFilters(new HttpExceptionFilter())
  findOne(@Param("id",ParseUUIDPipe) id) {
    console.log(typeof id); // 验证出错了就执行不到
  }

}
