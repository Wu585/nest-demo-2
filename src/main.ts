import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: "xxx",
    resave: false,
    name: "ricky.sid",
    saveUninitialized: false,
    rolling: true // 每次请求时强行设置 cookie，这将重置 cookie 过期时间
  }));

  app.enableCors()

  await app.listen(3000);
}

bootstrap();
