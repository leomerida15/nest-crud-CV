"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const config = app.get(config_1.ConfigService);
    const { port } = config.get("global");
    app.enableCors();
    app.setGlobalPrefix('v1');
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port, '0.0.0.0');
    console.log(`() ()`);
    console.log('(°.°) ');
    console.log('(| |)*');
}
bootstrap();
//# sourceMappingURL=main.js.map