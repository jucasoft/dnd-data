import { Test, TestingModule } from '@nestjs/testing';
import { DndDomainResolver } from './dnd-domain.resolver';
import { DndDomainService } from './dnd-domain.service';

describe('DndDomainResolver', () => {
  let resolver: DndDomainResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DndDomainResolver, DndDomainService],
    }).compile();

    resolver = module.get<DndDomainResolver>(DndDomainResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
