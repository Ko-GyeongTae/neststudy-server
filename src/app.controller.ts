import { Body, Controller, Get, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello():string{
    return this.appService.sayHello();
  }

  @Post('/hi')
  askHi(@Body()req: object): string {
    return this.appService.askHi(req);
  }

  @Get('/find/:id')
  findone(@Param('id') id): string{
    return this.appService.findone(id);
  }

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
  if (version && version === '6') {
    return { url: 'https://docs.nestjs.com/v6/' };
  }
}
  
}
