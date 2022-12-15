import {
  Controller,
  Logger,
  Post,
  Body,
  OnModuleInit,
  Get,
  Param,
} from '@nestjs/common';
import { IGrpcService, IGrpcServiceGreeting } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import { AppService } from './app.service';

interface IGetParams {
  name: string;
}

let data : number[] = [11,22,33,44]

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

  @Get('add')
  async add(@Body('data') data1: number[]) {
    return (data || []).reduce((a, b) => Number(a) + Number(b));
  }

  @Get('grpc-add')
  async accumulate(@Body('data') data1: number[]) {
    return this.grpcService.accumulate({data});
  }

  @Get('rest-add')
  async restAdd(@Body('data') data1: number[]) {
    return this.appService.restAdd(data);
  }
}
