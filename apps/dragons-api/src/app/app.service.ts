import { Injectable } from '@nestjs/common';
import { Dragon, dragonsData } from './types';

@Injectable()
export class AppService {
  getDragons(): { dragons: Dragon[] } {
    return { dragons: dragonsData };
  }
}
