import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sendEmail(): void {
    return this.appService.sendEmail('thiago.veiga.lima07@gmail.com');
  }
}
