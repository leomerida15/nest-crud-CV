"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'db.ctgsuetwrgmxiztntuuv.supabase.co',
    port: 6543,
    username: 'postgres',
    password: 'XfUt4wZrhuFJ7zguzOhu',
    database: 'postgres',
    logging: false,
    entities: ['src/modules/**/entities/*.entity.ts'],
    migrations: ['migrations/*.ts'],
});
//# sourceMappingURL=ormconfig.js.map