"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql1665937287682 = void 0;
const rol_entity_1 = require("../src/modules/auth/entities/rol.entity");
class sql1665937287682 {
    async up(queryRunner) {
        const user = new rol_entity_1.RolEntity();
        user.name = rol_entity_1.Rols.USER;
        const admin = new rol_entity_1.RolEntity();
        admin.name = rol_entity_1.Rols.ADMIN;
        const rol = await queryRunner.manager.insert(rol_entity_1.RolEntity, [user, admin]);
        console.log('rol', rol);
    }
    async down(queryRunner) { }
}
exports.sql1665937287682 = sql1665937287682;
//# sourceMappingURL=1665937287682-sql.js.map