import {HttpException, Injectable} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Comment, CommentDocument} from './entities/comment.entity';
import {UpdateSpellsInventoryDto} from '../spells-inventory/dto/update-spells-inventory.dto';
import {SpellsInventory} from '../spells-inventory/entities/spells-inventory.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private model: Model<CommentDocument>
  ) {
  }

  create(dto: CreateCommentDto) {
    try {
      const createdItem = new this.model(dto);
      return createdItem.save();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findAll(spellsInventory: Partial<Comment>) {
    try {
      return this.model.find(spellsInventory).exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
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
    return `This action removes a #${id} comment`;
  }
}
