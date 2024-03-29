import {ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform} from '@nestjs/common';
import {plainToInstance} from "class-transformer"
import {validate} from "class-validator";

@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)
    const DTO = plainToInstance(metadata.metatype, value) // 反射
    console.log(DTO)
    const errors = await validate(DTO)
    console.log(errors);
    if (errors.length) {
      throw new HttpException(errors, HttpStatus.BAD_REQUEST)
    }
    return value;
  }
}
