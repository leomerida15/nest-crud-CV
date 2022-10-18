"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = () => ({
    type: 'postgres',
    host: process.env.PGHOST,
    port: +process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    autoLoadEntities: true,
    logging: Boolean(process.env.DB_LOG),
});
exports.default = dbConfig;
//# sourceMappingURL=db.js.map