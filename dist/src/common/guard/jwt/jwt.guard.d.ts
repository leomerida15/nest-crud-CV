import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtDataInt } from './jwt.strategy';
import { Observable } from 'rxjs';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base implements CanActivate {
    private readonly _reflector;
    private validGuard;
    constructor(_reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    handleReques(err: string | Record<string, any>, jwtData: JwtDataInt, info: any, context: ExecutionContext): JwtDataInt;
}
export {};
