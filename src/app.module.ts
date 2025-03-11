import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

const envPath = `.env.${process.env.NODE_ENV || 'development'}`;
console.log(envPath, 'file path');
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envPath,
      isGlobal: true,
      load: [() => dotenv.config({ path: '.env' })],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
