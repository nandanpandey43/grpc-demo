import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { GRpcModule } from './grpcModule/grpcModule.module';

const microServicesOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../app.proto'),
    // url: 'localhost:4000', // if url not provided, it will run on the default port of GRpc
  },
};

async function bootstrap() {
  // port on 3001: to make usage of rest api.
  const app = await NestFactory.create(AppModule);

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'app',
  //     protoPath: join(__dirname, '../app.proto'),
  //     url: 'localhost:4000', // if url not provided, it will run on the default port of GRpc
  //   },
  // });

  // microservice for GRpc client.
  const grpcServer = await NestFactory.createMicroservice(GRpcModule, microServicesOptions);
  grpcServer.listen();

  // app.startAllMicroservices();
  app.listen(3001);
}
bootstrap();
