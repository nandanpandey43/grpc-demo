import { Injectable } from '@nestjs/common';

@Injectable()
export class GRpcModuleServices {

  accumulate(data: number[]): number {    
    return (data).reduce((a, b) => a + b);
  }

  greeting(data: string): string {
    return "Good Morning " + data;
  }
}
