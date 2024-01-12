import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res, StreamableFile, Header
} from "@nestjs/common";
import { UploadService } from "./upload.service";
import { CreateUploadDto } from "./dto/create-upload.dto";
import { UpdateUploadDto } from "./dto/update-upload.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { join } from "path";
import { zip } from "compressing";
import { createReadStream } from "fs";

@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {
  }

  @Post("album")
  @UseInterceptors(FileInterceptor("file"))
  upload(@UploadedFile() file) {
    console.log("file");
    console.log(file);
    return "file upload";
  }

  @Get("download")
  downLoad(@Res() res: Response) {
    const url = join(__dirname, "../images/1705044464681.png");
    res.download(url);
  }

  @Get("stream")
  async downStream(@Res() res: Response) {
    const url = join(__dirname, "../images/1705046434752.png");
    const tarStream = new zip.Stream();
    await tarStream.addEntry(url);

    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", "attachment;filename=curry");

    return tarStream.pipe(res);
  }

  @Get("stream2")
  @Header('Content-Type', 'application/json')
  @Header('Content-Disposition', 'attachment; filename="package.json"')
  downStream2(@Res() res: Response): StreamableFile {
    const file = createReadStream(join(process.cwd(), "package.json"));
    console.log(file.path);
    return new StreamableFile(file);
  }
}
