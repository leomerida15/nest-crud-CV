import dbConfig from './db';
import GlobalConfig from './global';
import ImgConfig from './img';
import JwtConfig from './jwt';
import MailConfig from './mail';
import SupabaseConfig from './supabase';

export const enum ConfigKeys {
	DB = 'db',
	JWT = 'jwt',
	IMG = 'img',
	MAIL = 'mail',
	GLOBAL = 'global',
	SUPABASE = 'supabase',
}

export default function configuration() {
	return {
		db: dbConfig(),
		jwt: new JwtConfig(),
		img: new ImgConfig(),
		mail: new MailConfig(),
		global: new GlobalConfig(),
		supabase: new SupabaseConfig(),
	};
}
