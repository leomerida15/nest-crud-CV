"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatData = void 0;
const common_1 = require("@nestjs/common");
exports.FormatData = (0, common_1.createParamDecorator)((data, req) => {
    const { body } = req.switchToHttp().getRequest();
    const bodyEntries = Object.entries(body);
    const bodyFormatOK = Object.fromEntries(bodyEntries);
    return bodyFormatOK;
});
//# sourceMappingURL=FormData.decorator.js.map