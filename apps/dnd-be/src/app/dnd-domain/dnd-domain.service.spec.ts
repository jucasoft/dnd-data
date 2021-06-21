import { Test, TestingModule } from '@nestjs/testing';
import { DndDomainService } from './dnd-domain.service';

describe('DndDomainService', () => {
  let service: DndDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DndDomainService],
    }).compile();

    service = module.get<DndDomainService>(DndDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
