import {HttpException, Injectable} from '@nestjs/common';
import {CreateSpellDto} from './dto/create-spell.dto';
import {UpdateSpellDto} from './dto/update-spell.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Spell, SpellDocument} from './entities/spell.entity';
import {Model} from 'mongoose';

@Injectable()
export class SpellService {
  constructor(
    @InjectModel(Spell.name) private model: Model<SpellDocument>
  ) {
  }

  create(item: CreateSpellDto, user: string) {
    return 'This action adds a new CreateSpellDto';
  }

  findAll(user: string): Promise<Spell[]> {
    // return this.model.find().exec();
    try {
      // if (paginateOpts && paginateOpts.limit && paginateOpts.page) {
      //   const skips = paginateOpts.limit * (paginateOpts.page - 1);
      //   paginateOpts.limit = +paginateOpts.limit;
      //   return this.model
      //     .find()
      //     .skip(skips)
      //     .limit(paginateOpts.limit)
      //     .exec();
      // }
      return this.model.find().exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} spell`;
  }

  update(id: string, value: UpdateSpellDto) {
    return `This action updates a #${id} UpdateSpellDto`;
  }

  remove(id: number) {
    return `This action removes a #${id} spell`;
  }
}
