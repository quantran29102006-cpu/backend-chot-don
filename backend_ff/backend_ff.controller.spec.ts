import { Test, TestingModule } from '@nestjs/testing';
import { BackendFfController } from './backend_ff.controller';
import { BackendFfService } from './backend_ff.service';

describe('BackendFfController', () => {
  let controller: BackendFfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackendFfController],
      providers: [BackendFfService],
    }).compile();

    controller = module.get<BackendFfController>(BackendFfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
