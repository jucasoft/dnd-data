import { Injectable } from '@nestjs/common';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';

@Injectable()
export class SpellService {
  create(createSpellDto: CreateSpellDto) {
    return 'This action adds a new spell';
  }

  findAll() {
    return `This action returns all spell`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spell`;
  }

  update(id: number, updateSpellDto: UpdateSpellDto) {
    return `This action updates a #${id} spell`;
  }

  remove(id: number) {
    return `This action removes a #${id} spell`;
  }
}
