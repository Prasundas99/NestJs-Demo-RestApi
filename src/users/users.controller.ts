import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from './users.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {

  @UseGuards(LocalAuthGuard)    
  @Post('login')
  login(@Request() req: any): User {
    return req.user;
  }

  // GET /protected
  @UseGuards(AuthenticatedGuard)
  @Get()
  getAllUsers(): string {
    return "" //this.appService.getHello();
  }
}
