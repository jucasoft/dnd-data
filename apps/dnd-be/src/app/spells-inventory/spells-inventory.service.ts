import {HttpException, Injectable} from '@nestjs/common';
import {CreateSpellsInventoryDto} from './dto/create-spells-inventory.dto';
import {UpdateSpellsInventoryDto} from './dto/update-spells-inventory.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {SpellsInventory, SpellsInventoryDocument} from './entities/spells-inventory.entity';

@Injectable()
export class SpellsInventoryService {
  constructor(
    @InjectModel(SpellsInventory.name) private model: Model<SpellsInventoryDocument>
  ) {
  }

  create(dto: CreateSpellsInventoryDto) {
    try {
      const createdItem = new this.model(dto);
      return createdItem.save();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findAll(spellsInventory: Partial<SpellsInventory>) {
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
      return this.model.find(spellsInventory).exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} spellsInventory`;
  }

  update(id: string, dto: UpdateSpellsInventoryDto): Promise<SpellsInventory> {
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

  remove(id: number) {
    return `This action removes a #${id} spellsInventory`;
  }
}
