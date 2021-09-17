import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpStatus } from '@nestjs/common';
import { DataResponseService } from 'src/comman/data-response.service';
import { UserdataDto } from 'src/userdata/userdata-dto';
import { Userdata } from 'src/userdata/userdata.entity';
import { UserdataService } from 'src/userdata/userdata.service';

@Controller('dashboard')
export class DashboardController {
 

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

 /* @Get()
  async showAllUsers() {
    const users = await this.userdataservice.showAll();
    return {
      status: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }

  @Post()
  async createUsers(@Body() data: UserdataDto) {
    const user = await this.userdataservice.create(data);
    return {
      status: HttpStatus.OK,
      message: 'User created successfully',
      user
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    const data = await this.userdataservice.read(id);
    return {
      status: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Put(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<UserdataDto>) {
    await this.userdataservice.update(id, data);
    return {
      status: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userdataservice.destroy(id);
    return {
      status: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }*/
}

