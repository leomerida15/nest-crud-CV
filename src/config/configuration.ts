import dbConfig from './db';
import GlobalConfig from './global';
import JwtConfig from './jwt';
import MailConfig from './mail';

export const enum ConfigKeys {
	DB = 'db',
	JWT = 'jwt',
	MAIL = 'mail',
	GLOBAL = 'global',
}

export default function configuration() {
	return {
		db: dbConfig(),
		jwt: new JwtConfig(),
		mail: new MailConfig(),
		global: new GlobalConfig(),
	};
}
