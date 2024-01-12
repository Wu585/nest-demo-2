import { DynamicModule, Global, Module } from "@nestjs/common";

interface ConfigOptions {
  path: string;
}

@Global() // 注入成全局模块
@Module({})
export class ConfigModule {
  static forRoot(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: "Config",
          useValue: {
            baseUrl: "/api" + options.path
          }
        }
      ],
      exports: [
        {
          provide: "Config",
          useValue: {
            baseUrl: "/api" + options.path
          }
        }
      ]
    };
  }
}
