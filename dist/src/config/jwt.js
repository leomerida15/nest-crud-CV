"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JwtConfig {
    constructor() {
        this.GuardConfig = {
            secret: process.env.JWT_KEY,
            signOptions: { expiresIn: process.env.JWT_EXP },
        };
    }
}
exports.default = JwtConfig;
//# sourceMappingURL=jwt.js.map