import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TestService } from "../post/test.service";
import { LogMiddleware } from "../middleware/log.middleware";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, TestService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LogMiddleware)
      .forRoutes({
        path: "user",
        method: RequestMethod.GET
      });
  }
}
