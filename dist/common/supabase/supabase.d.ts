import { ConfigService } from '@nestjs/config';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
export declare class Supabase {
    private readonly configService;
    private readonly logger;
    private Supabase;
    constructor(configService: ConfigService);
    get Auth(): SupabaseAuthClient;
}
