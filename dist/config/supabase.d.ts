import { SupabaseClientOptions } from '@supabase/supabase-js';
export default class SupabaseConfig {
    Url: string;
    Key: string;
    JwtSecret: string;
    Options: SupabaseClientOptions<'public'>;
    Connet: [string, string, SupabaseClientOptions<'public'>];
}
