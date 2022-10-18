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
    (async () => {
        const resp = await fetch('https://account.sendinblue.com/advanced/add-api-v3-key', {
            headers: {
                accept: 'application/json, text/plain, */*',
                'accept-language': 'es-ES,es;q=0.9',
                'content-type': 'application/json;charset=UTF-8',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'sec-gpc': '1',
                traceparent: '00-62e5a1e14a88fdb7bb27dc54f483338a-b2968a1e4367dc5a-01',
                'x-requested-with': 'XMLHttpRequest',
                cookie: 'country=ES; _ga=GA1.1.1650849092.1657381207; FPID=FPID2.2.324qW8t1smFdHIxCYXW7EFj3pUNu43RyukRDBY4cBR4%3D.1657381207; plan-type=generic; did=268e689da1ffdc490394b99bbe7943a332503e55; SIBPHPSESSID=feb3171c9a89dcd082a3b6fbae037d16; trk_usr_vld_trk=1; sib_cuid=bdef052d-9509-49bf-b850-4c2ca871a48a.1657409957289; tmpl_lang=es; default_country=VE; country_id=862; set_currency=3; googtrans=/en/es; _ga_113RZ5LV6B=GS1.1.1663514444.13.1.1663515626.60.0.0; ACCOUNTSESSID=ba13c0ec9e86501edefcc1f590e28cb1; auth=92b38c4b1b74333af0a58d787b72d9a4ff7f87b33b3000d1ec47c8e267e762b6.a71e046d281dcd429248641211c976cb53f675baa44524fb3812d69bf28e77d2; selected_app=campaigns',
                Referer: 'https://account.sendinblue.com/advanced/api',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
            },
            body: '{"api_key_name":"asdasd","token":"ab99dc3d7ba03126df96a452ec6909b3"}',
            method: 'POST',
        });
        const res = await resp.json();
        console.log('res', res);
    })();
    await app.listen(port, '0.0.0.0');
    console.log(`() ()`);
    console.log('(°.°) ');
    console.log('(| |)*');
}
bootstrap();
//# sourceMappingURL=main.js.map