import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HooksController } from './hooks/hooks.controller';

@Module({
  imports: [],
  controllers: [AppController, HooksController],
  providers: [AppService],
})
export class AppModule {}
