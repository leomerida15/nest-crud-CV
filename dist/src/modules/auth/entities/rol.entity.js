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
exports.RolEntity = exports.Rols = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var Rols;
(function (Rols) {
    Rols["USER"] = "user";
    Rols["ADMIN"] = "admin";
})(Rols = exports.Rols || (exports.Rols = {}));
let RolEntity = class RolEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RolEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Rols }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RolEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.UserEntity, (UserEntity) => UserEntity.rol),
    (0, class_validator_1.IsInstance)(user_entity_1.UserEntity, { each: true }),
    __metadata("design:type", Array)
], RolEntity.prototype, "user", void 0);
RolEntity = __decorate([
    (0, typeorm_1.Entity)()
], RolEntity);
exports.RolEntity = RolEntity;
//# sourceMappingURL=rol.entity.js.map