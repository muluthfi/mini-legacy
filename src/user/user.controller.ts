import { Controller, Post, Body, UseGuards, Get, Req, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

    @Post('register')
    async register(@Body() body: { npwp: number; password: string; email: string }) {
        return this.userService.create(body.npwp, body.password, body.email);
    }

  @Get('profile')
  async getProfile(@Request() req) {
    return {
      message: 'Authorized User',
      username: req.user.username, 
    };
  }
}
