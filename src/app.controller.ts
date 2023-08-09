import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  // @Get()
  // getHello(): string {
  //   console.log('>> check port = ', this.configService.get<string>('PORT'));

  //   return this.appService.getHello();
  // }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  handleLogin(@Request() req) {
    return req.user;
  }
}
