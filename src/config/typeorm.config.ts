import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL || 'postgres://postgres:@localhost/taskmanagement',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
