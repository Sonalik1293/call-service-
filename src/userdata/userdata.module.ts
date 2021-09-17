import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataResponseService } from 'src/comman/data-response.service';
import { UserdataController } from './userdata.controller';
import { Userdata } from './userdata.entity';
import { userdataRepository } from './userdata.repository';
import { UserdataService } from './userdata.service';

@Module({
    controllers: [UserdataController],
    providers: [DataResponseService,UserdataService],
    imports: [TypeOrmModule.forFeature([Userdata])],
})
export class UserdataModule {}
