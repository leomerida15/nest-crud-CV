import GlobalConfig from './global';
import JwtConfig from './jwt';
import SupabaseConfig from './supabase';
export declare const enum ConfigKeys {
    DB = "db",
    GLOBAL = "global",
    SUPABASE = "supabase"
}
export default function configuration(): {
    db: import("@nestjs/typeorm").TypeOrmModuleOptions;
    jwt: JwtConfig;
    global: GlobalConfig;
    supabase: SupabaseConfig;
};
