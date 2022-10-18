import { Strategy } from 'passport-local';
import { AuthService } from 'src/modules/auth/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(data: any): Promise<any>;
}
export {};
