import { Module } from '@nestjs/common';
import { SpellsInventoryService } from './spells-inventory.service';
import { SpellsInventoryController } from './spells-inventory.controller';

@Module({
  controllers: [SpellsInventoryController],
  providers: [SpellsInventoryService]
})
export class SpellsInventoryModule {}
