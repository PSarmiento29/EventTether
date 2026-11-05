import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto.js';

@Injectable()
export class EventsService {
  create(createEventDto: CreateEventDto) {
    return {
      message: 'Event received successfully',
      event: createEventDto,
    };
  }
}