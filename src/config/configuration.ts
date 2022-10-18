import dbConfig from './db';
import GlobalConfig from './global';
import JwtConfig from './jwt';
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
    global: new GlobalConfig(),
    supabase: new SupabaseConfig(),
  };
}
