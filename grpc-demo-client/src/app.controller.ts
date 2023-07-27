import {
  Controller,
  Logger,
  Post,
  Body,
  OnModuleInit,
  Get,
  Param,
  Query
} from '@nestjs/common';
import { IGrpcService, IGrpcServiceGreeting } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import { AppService } from './app.service';

interface IGetParams {
  name: string;
}

let randomData : number[] = [11,22,33,44]

@Controller()
export class AppController implements OnModuleInit {

  constructor(private appService : AppService){}

  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;
  // private readonly httpService: HttpService

  onModuleInit() {
    // console.log("module initialized...");
    this.grpcService = this.client.getService<IGrpcService>('AppController'); // <-- Add this
  } 


  @Get()
  async getroute(@Param() params: IGetParams, @Body('data') data: any) {
    console.log('body ', data);
    return { 'msg ': 'hello' };
  }

  @Post('add')
  async add(@Body('data') data: number[]) {
    return (data || []).reduce((a, b) => Number(a) + Number(b));
  }

  @Post('grpc-add')
  async accumulate(@Body('data') data: number[]) {
    return this.grpcService.accumulate({data});
  }

  @Post('rest-add')
  async restAdd(@Body('data') data: number[]) {
    return this.appService.restAdd(data);
  }

  @Get('grpc-greet')
  async greet(@Query('name') name: string) {
    return this.grpcService.greeting({name});
  }
}
