import { Controller, Get } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { GrpcMethod } from '@nestjs/microservices';
import { GRpcModuleServices } from './grpcModule.services';

interface INumberArray {
  data: number[];
}
interface IGreetMessage {
  data: string;
}
interface ISumOfNumberArray {
  sum: number;
}
interface GreetingMessage {
  message: string;
}

@Controller()
export class GRpcController {
  private logger = new Logger('AppController');
  constructor(private readonly grpcServices: GRpcModuleServices) {}
  
  /**
   * grpc route to add
   */
  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    return { sum: this.grpcServices.accumulate(numberArray.data) };
  }

}
