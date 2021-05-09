import {HttpException, Injectable} from '@nestjs/common';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Spell, SpellDocument} from './entities/spell.entity';
import {Model} from 'mongoose';

@Injectable()
export class SpellService {
  constructor(@InjectModel(Spell.name) private model: Model<SpellDocument>) {}

  create(createSpellDto: CreateSpellDto) {
    return 'This action adds a new spell';
  }

  findAll(): Promise<Spell[]> {
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

  update(id: number, updateSpellDto: UpdateSpellDto) {
    return `This action updates a #${id} spell`;
  }

  remove(id: number) {
    return `This action removes a #${id} spell`;
  }
}

// async create(createCatDto: CreateCatDto): Promise<Cat> {
//   const createdCat = new this.catModel(createCatDto);
//   return createdCat.save();
// }
//
// async findAll(): Promise<Cat[]> {
//   return this.catModel.find().exec();
// }
