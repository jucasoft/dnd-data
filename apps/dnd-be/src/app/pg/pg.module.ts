import {Module} from '@nestjs/common';
import {PgService} from './pg.service';
import {PgController} from './pg.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Pg, PgSchema} from './entities/pg.entity';
import {SpellsInventory, SpellsInventorySchema} from '../spells-inventory/entities/spells-inventory.entity';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name: Pg.name, schema: PgSchema},
        {name: SpellsInventory.name, schema: SpellsInventorySchema}
      ]
    )
  ],
  controllers: [PgController],
  providers: [PgService]
})
export class PgModule {
}
