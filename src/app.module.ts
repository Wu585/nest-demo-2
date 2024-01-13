import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { CodeModule } from "./code/code.module";
import { OpenaiModule } from "./openai/openai.module";
import { MessagesModule } from "./messages/messages.module";
import { TestService } from "./Test.service";
import { ConfigModule } from "./config/config.module";
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    CodeModule,
    OpenaiModule,
    MessagesModule,
    ConfigModule.forRoot({
      path: "ricky"
    }),
    UploadModule,
    LoginModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TestService,
    {
      provide: "Test",
      useValue: ["a", "b", "c"]
    },
    {
      provide: "Factory",
      inject: [TestService],
      useFactory(testService: TestService) {
        console.log(testService.getHello());
        return 123;
      }
    }
  ]
})
export class AppModule {
}
