import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'types/interface';

import * as config from 'config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const env = this.configService.get<DatabaseConfig>('db');
    const envCconfig = config.get('server');

    console.log(env, config, 'config and  server');
    return this.appService.getHello();
  }
}
