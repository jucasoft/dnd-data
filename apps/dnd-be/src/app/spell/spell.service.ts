import {HttpException, Injectable} from '@nestjs/common';
import {CreateSpellDto} from './dto/create-spell.dto';
import {UpdateSpellDto} from './dto/update-spell.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Spell, SpellDocument} from './entities/spell.entity';
import {Model} from 'mongoose';
import {SpellsInventory, SpellsInventoryDocument} from '../model/spells-inventory';

@Injectable()
export class SpellService {
  constructor(
    @InjectModel(Spell.name) private modelSpell: Model<SpellDocument>,
    @InjectModel(SpellsInventory.name) private modelSpellsInventory: Model<SpellsInventoryDocument>
  ) {
  }

  create(item: CreateSpellDto, user: string) {
    try {
      const itemB = {...item.spells}
      const createdItem = new this.modelSpellsInventory(itemB);
      return createdItem.save();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
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
      return this.modelSpell.find().exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} spell`;
  }

  update(id: string, value: UpdateSpellDto) {
    try {
      const item = {...value.spells}
      if (item._id) {
        const updated: any = this.modelSpellsInventory.findByIdAndUpdate(item._id, item, {
          upsert: true
        });
        return updated;
      } else {
        const createdItem = new this.modelSpellsInventory(item);
        return createdItem.save();
      }
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
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
