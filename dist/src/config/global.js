"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GlobalConfig {
    constructor() {
        this.regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?\.&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
        this.port = process.env.PORT;
    }
}
exports.default = GlobalConfig;
//# sourceMappingURL=global.js.map