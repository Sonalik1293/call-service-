import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserdataDto } from './userdata-dto';
import { Userdata } from './userdata.entity';
import { userdataRepository } from './userdata.repository';

@Injectable()
export class UserdataService {
    constructor(
        @InjectRepository(Userdata)
        private userdataRepository: userdataRepository,) { }

        async find(userid:number): Promise<Userdata[]>{
            console.log(userid);
            return await this.userdataRepository.query("call userdetail.user_procedure(?)",[userid]);
        }


        async showAll() {
            return await this.userdataRepository.find();
          }
        
          async create(data: UserdataDto) {
            const user = this.userdataRepository.create(data);
            await this.userdataRepository.save(data);
            return user;
          }
        
          async read(id: number) {
            return await this.userdataRepository.findOne({ where: { id: id } });
          }
        
          async update(id: number, data: Partial<UserdataDto>) {
            await this.userdataRepository.update({ id }, data);
            return await this.userdataRepository.findOne({ id });
          }
        
          async destroy(id: number) {
            await this.userdataRepository.delete({ id });
            return { deleted: true };
          }
}
