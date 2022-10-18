import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
// import generateTypeormConfigFile from './script/generate-typeorm-config-file';
import { ConfigService } from '@nestjs/config';
import { ConfigKeys } from './config/configuration';
import GlobalConfig from './config/global';

async function bootstrap() {
  // define http frameware
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // Config

  const config = app.get(ConfigService);

  const { port } = config.get<GlobalConfig>(ConfigKeys.GLOBAL);

  // scritps
  // generateTypeormConfigFile(config);

  // cors
  app.enableCors();

  // prefig
  app.setGlobalPrefix('v1');

  // valid
  app.useGlobalPipes(new ValidationPipe());

  //  server
  await app.listen(port, '0.0.0.0');

  // Bonny
  console.log(`() ()`);
  console.log('(°.°) ');
  console.log('(| |)*');
}
bootstrap();
