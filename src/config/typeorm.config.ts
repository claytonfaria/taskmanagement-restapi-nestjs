import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL || 'postgres://postgres:@localhost/taskmanagement',
  entities: [__dirname + './../**/*.entity.{js,ts}'],
  synchronize: true,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};
