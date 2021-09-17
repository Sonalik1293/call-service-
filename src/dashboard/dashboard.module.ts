import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { UserdataService } from 'src/userdata/userdata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userdata } from 'src/userdata/userdata.entity';
import { DataResponseService } from 'src/comman/data-response.service';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService,UserdataService,DataResponseService],
  imports: [TypeOrmModule.forFeature([Userdata])],
})
export class DashboardModule {}
