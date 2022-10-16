import { createUser1665909172597 } from '../migrations/1665909172597-create-user';
import { User } from "src/entity/user.entity";
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test1',
  entities: [User],
  synchronize: false,
  migrations: [createUser1665909172597],
  //migrationsTableName: 'history',
  //subscribers: ['src/subscriber/**/*.ts'],
}