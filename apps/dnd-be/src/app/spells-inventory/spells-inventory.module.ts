import {Module} from '@nestjs/common';
import {SpellsInventoryService} from './spells-inventory.service';
import {SpellsInventoryController} from './spells-inventory.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {SpellsInventory, SpellsInventorySchema} from './entities/spells-inventory.entity';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name: SpellsInventory.name, schema: SpellsInventorySchema}
      ]
    )
  ],
  controllers: [SpellsInventoryController],
  providers: [SpellsInventoryService]
})
export class SpellsInventoryModule {
}
