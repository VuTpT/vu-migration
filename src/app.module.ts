import { Module, Controller } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/user.entity';
import { config } from './config/ormconfig';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {
  constructor(private dataSource: DataSource){};
}
