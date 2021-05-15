import {Module} from '@nestjs/common';
import {SpellService} from './spell.service';
import {SpellController} from './spell.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Spell, SpellSchema} from './entities/spell.entity';
import {SpellsInventory, SpellsInventorySchema} from '../model/spells-inventory';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Spell.name, schema: SpellSchema},
    {name: SpellsInventory.name, schema: SpellsInventorySchema}
  ])],
  controllers: [SpellController],
  providers: [SpellService]
})
export class SpellModule {
}
