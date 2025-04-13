import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NumberEntity } from '../numbers/entities/number.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'numbers.db',
  entities: [NumberEntity],
  synchronize: true,
};
