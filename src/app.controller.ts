import {Controller, Get, Inject} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('Test') private readonly testValue: string[],
    @Inject("Factory") private readonly factory: number
  ) {
  }

  @Get()
  getHello(): string {
    console.log(this.testValue)  // a b c
    console.log(this.factory);
    return this.appService.getHello();
  }
}
