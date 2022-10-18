"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const generateTypeormConfigFile = (config) => {
    const typeormConfig = config.get("db");
    fs.writeFileSync('ormconfig.json', JSON.stringify(typeormConfig, null, 2));
};
exports.default = generateTypeormConfigFile;
//# sourceMappingURL=generate-typeorm-config-file.js.map