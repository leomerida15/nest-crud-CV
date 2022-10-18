"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const global_1 = require("./global");
const supabase_1 = require("./supabase");
function configuration() {
    return {
        db: (0, db_1.default)(),
        global: new global_1.default(),
        supabase: new supabase_1.default(),
    };
}
exports.default = configuration;
//# sourceMappingURL=configuration.js.map