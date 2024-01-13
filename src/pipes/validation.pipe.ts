import {ArgumentMetadata, PipeTransform} from "@nestjs/common";

export class ValidationPipe implements PipeTransform<any>{
  transform(value: any, metadata: ArgumentMetadata): any {
  }
}
