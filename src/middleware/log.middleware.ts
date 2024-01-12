import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request Url:", req.originalUrl);
    next();
  }
}

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request Url:", req.originalUrl);
  next();
}
