import { Controller, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
      //POST /login
  @Post('login')
  login(): string {
    return "" //this.appService.getHello();
  }

  // GET /protected
  @Get('protected')
  getInfo(): string {
    return "" //this.appService.getHello();
  }
}
