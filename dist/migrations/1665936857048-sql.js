"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql1665936857048 = void 0;
const rol_entity_1 = require("../src/modules/auth/entities/rol.entity");
class sql1665936857048 {
    async up(queryRunner) {
        await queryRunner.manager.save(rol_entity_1.RolEntity, {
            data: { name: 'user' },
        });
    }
    async down(queryRunner) { }
}
exports.sql1665936857048 = sql1665936857048;
//# sourceMappingURL=1665936857048-sql.js.map