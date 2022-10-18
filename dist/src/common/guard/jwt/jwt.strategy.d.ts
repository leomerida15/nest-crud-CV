import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
interface payload {
    data: [string, string];
}
export interface JwtDataInt {
    id: payload['data'][0];
    rol: payload['data'][1];
}
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate({ data: { '0': id, '1': rol } }: payload): JwtDataInt;
}
export {};
