import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'types/interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const env = this.configService.get<DatabaseConfig>('db');
    console.log(env, 'config');
    return this.appService.getHello();
  }
}
