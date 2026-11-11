import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { EventsModule } from './events/events.module.js';
import { DatabaseModule } from './database/database.module.js';

@Module({
  imports: [HealthModule, EventsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
