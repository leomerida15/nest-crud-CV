import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ConfigKeys } from './config/configuration';
import { contentParser } from 'fastify-multer';
import GlobalConfig from './config/global';

async function bootstrap() {
	// define http frameware
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({
			logger: true,
		}),
	);

	// Multer
	await app.register(contentParser);

	// Config
	const config = app.get(ConfigService);

	const { port, name } = config.get<GlobalConfig>(ConfigKeys.GLOBAL);

	// scritps
	// generateTypeormConfigFile(config);

	// cors
	app.enableCors();

	// prefig
	app.setGlobalPrefix('v1');

	// valid
	app.useGlobalPipes(new ValidationPipe());

	// swagger
	const swaggerConfig = new DocumentBuilder()
		.addBearerAuth()
		.setTitle(name)
		.setDescription(`The ${name} API description`)
		.setVersion('1.0')
		.addTag(name)
		.setExternalDoc('Postman Collection', 'api-json')
		.build();
	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup('api', app, document);

	//  Server
	await app.listen(port, '0.0.0.0');

	// Bonny
	console.log(`() ()`);
	console.log('(°.°) ');
	console.log('(| |)*');
}
bootstrap();
