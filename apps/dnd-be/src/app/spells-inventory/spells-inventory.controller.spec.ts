import { Test, TestingModule } from '@nestjs/testing';
import { SpellsInventoryController } from './spells-inventory.controller';
import { SpellsInventoryService } from './spells-inventory.service';

describe('SpellsInventoryController', () => {
  let controller: SpellsInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpellsInventoryController],
      providers: [SpellsInventoryService],
    }).compile();

    controller = module.get<SpellsInventoryController>(SpellsInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
