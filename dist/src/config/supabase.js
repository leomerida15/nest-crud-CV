"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SupabaseConfig {
    constructor() {
        this.Url = process.env.SUPABASE_URL;
        this.Key = process.env.SUPABASE_KEY;
        this.JwtSecret = process.env.SUPABASE_JWT_SECRET;
        this.Options = {
            auth: {
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: true,
            },
        };
        this.Connet = [
            this.Url,
            this.Key,
            this.Options,
        ];
    }
}
exports.default = SupabaseConfig;
//# sourceMappingURL=supabase.js.map