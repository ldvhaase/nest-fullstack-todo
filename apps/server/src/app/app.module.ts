import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerFeatureTodoModule } from '@lvh/server/feature-todo';

@Module({
  imports: [ServerFeatureTodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
