import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { EventsModule } from './events/events.module.js';

@Module({
  imports: [HealthModule, EventsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
