import { Test, TestingModule } from '@nestjs/testing';
import { BackendFfService } from './backend_ff.service';

describe('BackendFfService', () => {
  let service: BackendFfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackendFfService],
    }).compile();

    service = module.get<BackendFfService>(BackendFfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
