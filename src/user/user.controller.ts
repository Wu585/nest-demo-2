import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { TestService } from "../post/test.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService, private readonly testService: TestService) {
  }

  @Get()
  findAll(@Query() query) {
    console.log(query);
    this.testService.test();
    return this.userService.findAll();
  }

}
