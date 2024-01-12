import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, Inject } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { TestService } from "../post/test.service";

@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly testService: TestService,
    @Inject("Config") private readonly baseUrl: string
  ) {
  }

  @Get()
  findAll(@Query() query) {
    console.log(query);
    console.log(this.baseUrl);
    this.testService.test();
    return this.userService.findAll();
  }

  @Post()
  create() {
    console.log("create user");
  }

}
