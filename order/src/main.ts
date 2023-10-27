import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Redis from "ioredis";
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS
  });
  await app.listen();
}
bootstrap();
