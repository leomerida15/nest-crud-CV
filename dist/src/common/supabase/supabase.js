"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Supabase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supabase = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const supabase_js_1 = require("@supabase/supabase-js");
let Supabase = Supabase_1 = class Supabase {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(Supabase_1.name);
        this.logger.log('getting supabase client...');
        if (!this.Supabase) {
            this.Supabase = (0, supabase_js_1.createClient)(...this.configService.get('supabase').Connet);
        }
    }
    get Auth() {
        return this.Supabase.auth;
    }
};
Supabase = Supabase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], Supabase);
exports.Supabase = Supabase;
//# sourceMappingURL=supabase.js.map