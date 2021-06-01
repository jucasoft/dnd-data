import {HttpException, Injectable} from '@nestjs/common';
import {UpdatePgDto} from './dto/update-pg.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {SpellsInventory, SpellsInventoryDocument} from '../spells-inventory/entities/spells-inventory.entity';
import {Pg, PgDocument} from './entities/pg.entity';
import {CreatePgDto} from './dto/create-pg.dto';

@Injectable()
export class PgService {
  constructor(
    @InjectModel(Pg.name) private model: Model<PgDocument>,
    @InjectModel(SpellsInventory.name) private modelSpellsInventory: Model<SpellsInventoryDocument>
  ) {
  }

  create(dto: CreatePgDto, user: string) {
    try {
      const createdItem = new this.model(dto);
      return createdItem.save();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findAll(user) {
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
      return this.model.find({user}).exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findOne(id: string) {
    try {
      return this.model.findById(id);
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  update(id: string, dto: UpdatePgDto) {
    try {
      const updated: any = this.model.findByIdAndUpdate(id, dto, {
        upsert: true,
        new: true
      });
      return updated;
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  remove(id: string) {
    try {
      this.modelSpellsInventory.deleteMany({pgId: id}).then(value => console.log('deleteMany', value));
      return this.model.findByIdAndDelete(id);
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }
}
