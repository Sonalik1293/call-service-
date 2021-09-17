import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { DataResponseService } from 'src/comman/data-response.service';
import { Userdata } from './userdata.entity';
import { UserdataService } from './userdata.service';

@Controller('userdata')
export class UserdataController {
    constructor(private readonly userdataservice:UserdataService,
                private readonly dataresponseservice:DataResponseService){}

    @Get()
    async find(@Param('userid') userid): Promise <Userdata[]>{
        console.log(userid);
        
        try {
            const result=  await this.userdataservice.find(userid);
            return this.dataresponseservice.handeleSuccess(
              HttpStatus.OK,
              "userfetch successfully", result)
          }
          catch (error) {
            return this.dataresponseservice.handleFailed(
              HttpStatus.FORBIDDEN,
              "Forbidden",
              
            )
        }
    }

}