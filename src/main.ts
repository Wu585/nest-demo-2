import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as session from "express-session";
import { logger } from "./middleware/log.middleware";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { ResponseInterceptor } from "./interceptors/response.interceptor";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "images"), {
    prefix: "/images"
  });

  app.use(session({
    secret: "xxx",
    resave: false,
    name: "ricky.sid",
    saveUninitialized: false,
    rolling: true // 每次请求时强行设置 cookie，这将重置 cookie 过期时间
  }));

  app.use(logger);

  app.useGlobalInterceptors(new ResponseInterceptor())

  app.enableCors();

  await app.listen(3000);
}

bootstrap();
