import { IsNotEmpty, IsString } from "class-validator";
export class UserdataDto {


     @IsString()
     @IsNotEmpty()
     name: string;

    /* @IsString()
     @IsNotEmpty()
     email: string;

     @IsString()
     @IsNotEmpty()
     address: string;*/

     @IsString()
     @IsNotEmpty()
     Department_Name: string;
}
