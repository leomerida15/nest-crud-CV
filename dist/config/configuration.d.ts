import GlobalConfig from './global';
import SupabaseConfig from './supabase';
export declare const enum ConfigKeys {
    DB = "db",
    GLOBAL = "global",
    SUPABASE = "supabase"
}
export default function configuration(): {
    db: import("@nestjs/typeorm").TypeOrmModuleOptions;
    global: GlobalConfig;
    supabase: SupabaseConfig;
};
