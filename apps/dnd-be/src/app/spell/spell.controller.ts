import {Controller} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';

import {Spell} from './entities/spell.entity';
import {SpellService} from './spell.service';

@Crud({
  model: {
    type: Spell,
  },
})
@Controller('spell')
export class SpellController implements CrudController<Spell> {
  constructor(public service: SpellService) {
  }
}
