import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //POST /login
  @Post('login')
  login(): string {
    return this.appService.getHello();
  }

  // GET /protected
  @Get('protected')
  getInfo(): string {
    return this.appService.getHello();
  }
}
