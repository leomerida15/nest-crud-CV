import dbConfig from './db';
import GlobalConfig from './global';
import JwtConfig from './jwt';
import MailConfig from './mail';
import SupabaseConfig from './supabase';

export const enum ConfigKeys {
	DB = 'db',
	GLOBAL = 'global',
	SUPABASE = 'supabase',
}

export default function configuration() {
	return {
		db: dbConfig(),
		jwt: new JwtConfig(),
		mail: new MailConfig(),
		global: new GlobalConfig(),
		supabase: new SupabaseConfig(),
	};
}
