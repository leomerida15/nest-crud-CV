import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dbConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.PGHOST,
  port: +process.env.PGPORT,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  autoLoadEntities: true,
  logging: Boolean(process.env.DB_LOG),
});

export default dbConfig;