import { Test, TestingModule } from '@nestjs/testing';
import { DataResponseService } from './data-response.service';

describe('DataResponseService', () => {
  let service: DataResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataResponseService],
    }).compile();

    service = module.get<DataResponseService>(DataResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
