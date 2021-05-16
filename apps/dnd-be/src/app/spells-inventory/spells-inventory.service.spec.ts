import { Test, TestingModule } from '@nestjs/testing';
import { SpellsInventoryService } from './spells-inventory.service';

describe('SpellsInventoryService', () => {
  let service: SpellsInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpellsInventoryService],
    }).compile();

    service = module.get<SpellsInventoryService>(SpellsInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
