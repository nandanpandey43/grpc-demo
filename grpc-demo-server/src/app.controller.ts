import { Body, Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';


@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * rest route to add
   */
  @Get('rest-add')
  add(@Body() data: any): number {
    // console.log("get rest add", data);
    return (data || []).reduce((a, b) => Number(a) + Number(b));
  }
}
