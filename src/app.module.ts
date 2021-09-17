import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserdataModule } from './userdata/userdata.module';
import { DashboardModule } from './dashboard/dashboard.module';



@Module({
  imports: [UserdataModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'userdetail',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true
  }), DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
