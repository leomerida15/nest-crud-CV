import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'containers-us-west-87.railway.app',
	port: 5599,
	username: 'postgres',
	password: 'XfUt4wZrhuFJ7zguzOhu',
	database: 'railway',
	migrations: ['./migrations/*.ts'],
	entities: ['./src/modules/**/entities/*.entity.ts'],
});
