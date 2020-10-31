import { TypeOrmModuleOptions } from '@nestjs/typeorm';

let postgresURL: string;

if (process.env.NODE_ENV === 'production') {
  postgresURL = process.env.DATABASE_URL;
} else {
  postgresURL = 'postgres://postgres:@localhost/taskmanagement';
}

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: postgresURL,
  entities: [__dirname + './../**/*.entity.{js,ts}'],
  synchronize: process.env.NODE_ENV !== 'production',
};
