import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {Spell} from './entities/spell.entity';

@Injectable()
export class SpellService extends TypeOrmCrudService<Spell> {
  constructor(@InjectRepository(Spell) repo) {
    super(repo);
  }
}
