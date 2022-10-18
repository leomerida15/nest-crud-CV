import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db.ctgsuetwrgmxiztntuuv.supabase.co',
  port: 6543,
  username: 'postgres',
  password: 'XfUt4wZrhuFJ7zguzOhu',
  database: 'postgres',
  logging: false,
  entities: ['src/modules/**/entities/*.entity.ts'],
  migrations: ['migrations/*.ts'],
});
