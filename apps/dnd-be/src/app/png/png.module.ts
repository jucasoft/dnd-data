import {Module} from '@nestjs/common';
import {PngService} from './png.service';
import {PngController} from './png.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Png, PngSchema} from './entities/png.entity';
import {SpellsInventory, SpellsInventorySchema} from '../spells-inventory/entities/spells-inventory.entity';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name: Png.name, schema: PngSchema},
        {name: SpellsInventory.name, schema: SpellsInventorySchema}
      ]
    )
  ],
  controllers: [PngController],
  providers: [PngService]
})
export class PngModule {
}
