import {HttpException, Injectable} from '@nestjs/common';
import {CreateInfoDto} from './dto/create-info.dto';
import {UpdateInfoDto} from './dto/update-info.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Info, InfoDocument} from './entities/info.entity';
import {UpdateSpellsInventoryDto} from '../spells-inventory/dto/update-spells-inventory.dto';
import {SpellsInventory} from '../spells-inventory/entities/spells-inventory.entity';

@Injectable()
export class InfoService {
  constructor(
    @InjectModel(Info.name) private model: Model<InfoDocument>
  ) {
  }

  create(dto: CreateInfoDto) {
    try {
      const createdItem = new this.model(dto);
      return createdItem.save();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findAll(spellsInventory: Partial<Info>) {
    try {
      return this.model.find(spellsInventory).exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} info`;
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
    return `This action removes a #${id} info`;
  }
}
