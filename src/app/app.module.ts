import { Module } from '@nestjs/common';
import { AppController } from '../health/health.controller';
import { AppService } from '../health/health.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
