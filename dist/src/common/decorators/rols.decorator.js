"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLS_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLS_KEY = 'rols';
const Roles = (...rols) => (0, common_1.SetMetadata)(exports.ROLS_KEY, rols);
exports.Roles = Roles;
//# sourceMappingURL=rols.decorator.js.map