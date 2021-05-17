import {Module} from '@nestjs/common';
import {SpellService} from './spell.service';
import {SpellController} from './spell.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Spell, SpellSchema} from './entities/spell.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Spell.name, schema: SpellSchema},
  ])],
  controllers: [SpellController],
  providers: [SpellService]
})
export class SpellModule {
}
