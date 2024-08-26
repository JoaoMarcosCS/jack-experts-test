import { User } from '../../user/user.entity';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/db.sqlite',
  entities: [User], 
  synchronize: true,
});

export default AppDataSource.initialize();