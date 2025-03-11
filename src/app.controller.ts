import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const env = this.configService.get('env');
    const name = this.configService.get('common_name');

    console.log(env, name, 'config');
    return this.appService.getHello();
  }
}
