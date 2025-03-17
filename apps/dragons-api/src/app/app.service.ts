import { Injectable } from '@nestjs/common';
import { Dragon, dragonsData } from './types';

@Injectable()
export class AppService {
  getDragons(): Dragon[] {
    return dragonsData;
  }
}
