import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configration from '../configration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
