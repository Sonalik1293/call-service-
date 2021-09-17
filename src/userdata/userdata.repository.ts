import { Repository, EntityRepository, Any } from 'typeorm';

import { UserdataDto } from './userdata-dto';
import { Userdata } from './userdata.entity';

@EntityRepository(Userdata)
export class userdataRepository extends Repository<Userdata> {

    public async createUser(userdataDto: UserdataDto,): Promise<Userdata> {
        const { name,Department_Name } = userdataDto;

        const user = new Userdata();
        user.name = name;
        user.Department_Name =Department_Name;


        await user.save();
        return user;
    }
}