import { Module } from '@nestjs/common';
import { GRpcController } from './grpcModule.controller';
import { GRpcModuleServices } from './grpcModule.services';

@Module({
  imports: [],
  controllers: [GRpcController],
  providers: [GRpcModuleServices],
})
export class GRpcModule {}
