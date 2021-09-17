import { Injectable } from '@nestjs/common';

@Injectable()
export class DataResponseService {

    async handeleSuccess(status: any, message: any, data: any): Promise<any> {
        return {
            status: status,
            message: message,
            data: data
        }
    }

    async handleFailed(status: any, message: any): Promise<any> {
        return {
            status: status,
            message: message,

        }
    }




}
