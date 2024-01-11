import { Body, Controller, Get, Post, Response, Session } from "@nestjs/common";
import { CodeService } from "./code.service";

@Controller("code")
export class CodeController {
  constructor(private readonly codeService: CodeService) {

  }

  @Get()
  get(@Response() res, @Session() session) {
    const captcha = this.codeService.createCode();
    session.code = captcha.text;
    res.type("image/svg+xml");
    res.send(captcha.data);
  }


  @Post()
  createUser(@Body() body, @Session() session) {
    console.log(body, session.code);
  }
}
