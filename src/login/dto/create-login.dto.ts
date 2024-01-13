import {IsNotEmpty, IsNumber, IsString, Length} from "class-validator";

export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 10, {
    message: "只能在3-10个字符之间"
  })
  name: string

  @IsNotEmpty()
  @IsNumber()
  age: number
}
