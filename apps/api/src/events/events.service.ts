
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  create() {
    return {
      message: 'Event received successfully',
    };
  }
}
