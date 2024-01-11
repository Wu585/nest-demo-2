import { Injectable } from "@nestjs/common";
import * as svgCaptcha from "svg-captcha";

@Injectable()
export class CodeService {
  createCode() {
    return  svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: "#cc9966"
    });
  }
}
