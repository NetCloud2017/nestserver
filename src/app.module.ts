import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configration from '../configration';
import * as Joi from 'joi';

const envFilePath = `.env.${process.env.NODE_ENV || 'development'}`;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFilePath,
      // load: [configration],
      validationSchema: Joi.object({
        port: Joi.number().default(8080),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
