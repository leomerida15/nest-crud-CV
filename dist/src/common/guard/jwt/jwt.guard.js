"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
const rols_decorator_1 = require("../../decorators/rols.decorator");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(_reflector) {
        super();
        this._reflector = _reflector;
    }
    validGuard(jwtKey, list) {
        return jwtKey.some((item) => list.includes(item));
    }
    canActivate(context) {
        return super.canActivate(context);
    }
    handleReques(err, jwtData, info, context) {
        console.log('info', info);
        if (err || !jwtData)
            throw err || new common_1.UnauthorizedException();
        const rols = this._reflector.getAllAndOverride(rols_decorator_1.ROLS_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        const validRol = this.validGuard([jwtData.rol], rols);
        if (!validRol)
            throw new common_1.HttpException(err, common_1.HttpStatus.FORBIDDEN);
        return jwtData;
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt.guard.js.map