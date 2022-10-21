import { SupabaseClientOptions } from '@supabase/supabase-js';

export default class SupabaseConfig {
	Url: string = process.env.SUPABASE_URL;
	Key: string = process.env.SUPABASE_KEY;
	JwtSecret: string = process.env.SUPABASE_JWT_SECRET;
	Options: SupabaseClientOptions<'public'> = {
		auth: {
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: true,
		},
	};

	Connet: [string, string, SupabaseClientOptions<'public'>] = [this.Url, this.Key, this.Options];
}
