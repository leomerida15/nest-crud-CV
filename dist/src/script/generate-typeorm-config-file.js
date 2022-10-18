"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const fs_1 = require("fs");
const generateTypeormConfigFile = (config) => {
    if (!(0, fs_1.existsSync)('ormconfig.ts')) {
        const typeormConfig = config.get("db");
        console.log('typeormConfig', typeormConfig);
        const obj = Object.entries(typeormConfig)
            .filter(([key]) => key !== 'autoLoadEntities')
            .map(([key, value]) => {
            console.log('value', value);
            console.log('typeof value', typeof value);
            if ((0, class_validator_1.isArray)(value))
                return `${key}: ${value}`;
            if ((0, class_validator_1.isNumber)(value))
                return `${key}: ${Number(value)}`;
            if ((0, class_validator_1.isBoolean)(value))
                return `${key}: ${value}`;
            return `${key}: '${String(value)}'`;
        })
            .join(', ');
        const text = `
  import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({${obj}});
`;
        console.log('text', text);
        (0, fs_1.writeFileSync)('ormconfig.ts', text);
    }
};
exports.default = generateTypeormConfigFile;
//# sourceMappingURL=generate-typeorm-config-file.js.map