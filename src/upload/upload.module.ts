import { Module } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { UploadController } from "./upload.controller";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { join, extname } from "path";

@Module({
  imports: [MulterModule.register({
    storage: diskStorage({
      destination: join(__dirname, "../images"),
      filename(_, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
        const reFileName = `${new Date().getTime() + extname(file.originalname)}`;
        return callback(null, reFileName);
      }
    })
  })],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {
}
