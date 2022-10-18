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
exports.UserRecoverDto = exports.UserLoginDto = exports.UserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const configuration_1 = require("../../../config/configuration");
const rol_entity_1 = require("../entities/rol.entity");
class UserDto {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)((0, configuration_1.default)().global.regexPass),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(rol_entity_1.Rols),
    __metadata("design:type", String)
], UserDto.prototype, "rol", void 0);
exports.UserDto = UserDto;
class UserLoginDto extends (0, mapped_types_1.OmitType)(UserDto, ['rol']) {
}
exports.UserLoginDto = UserLoginDto;
class UserRecoverDto extends (0, mapped_types_1.PickType)(UserDto, ['email']) {
}
exports.UserRecoverDto = UserRecoverDto;
//# sourceMappingURL=user.dto.js.map