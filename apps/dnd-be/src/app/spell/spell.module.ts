import {Module} from '@nestjs/common';
import {SpellService} from './spell.service';
import {SpellController} from './spell.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Spell} from './entities/spell.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spell])],
  controllers: [SpellController],
  providers: [SpellService],
  exports: [SpellService],
})
export class SpellModule {
}
