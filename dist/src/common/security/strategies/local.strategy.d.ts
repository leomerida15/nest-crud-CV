import { Strategy } from 'passport-local';
import { SecurityService } from '../security.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly securityService;
    constructor(securityService: SecurityService);
    validate(email: string, password: string): Promise<import("../../../modules/auth/entities/user.entity").UserEntity>;
}
export {};
