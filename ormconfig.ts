
  import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	
	
		type: 'postgres',
		host: 'babar.db.elephantsql.com',
		port: 5432,
		username: 'bdadlloh',
		password: 'c77aK4BfEyIeSaAxTg3NTQvP40CCm4zs',
		database: 'bdadlloh',
		migrations: ['./migrations/*.ts'],
		entities: ['./src/modules/**/entities/*.entity.ts'],

});
