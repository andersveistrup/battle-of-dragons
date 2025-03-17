import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Dragon } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/dragons')
  getDragons(): Dragon[] {
    return this.appService.getDragons();
  }
}
