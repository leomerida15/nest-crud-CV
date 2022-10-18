import { ConfigService } from '@nestjs/config';
import { isArray, isBoolean, isNumber } from 'class-validator';
import { unlinkSync, writeFileSync, existsSync } from 'fs';
import { ConfigKeys } from 'src/config/configuration';

/**
 * This script will generate the ormconfig.json based on your Global Config
 * @param config Config Service for accessing the ENV Variables
 */
const generateTypeormConfigFile = (config: ConfigService) => {
  if (!existsSync('ormconfig.ts')) {
    const typeormConfig = config.get(ConfigKeys.DB);

    console.log('typeormConfig', typeormConfig);

    const obj = Object.entries<any>(typeormConfig)
      .filter(([key]) => key !== 'autoLoadEntities')
      .map(([key, value]) => {
        console.log('value', value);
        console.log('typeof value', typeof value);

        if (isArray(value)) return `${key}: ${value}`;

        if (isNumber(value)) return `${key}: ${Number(value)}`;

        if (isBoolean(value)) return `${key}: ${value}`;

        return `${key}: '${String(value)}'`;
      })
      .join(', ');

    const text = /* sql */ `
  import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({${obj}});
`;

    console.log('text', text);

    writeFileSync('ormconfig.ts', text);
  }
};

export default generateTypeormConfigFile;
