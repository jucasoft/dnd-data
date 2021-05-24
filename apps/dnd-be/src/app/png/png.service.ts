import {HttpException, Injectable} from '@nestjs/common';
import {CreatePngDto} from './dto/create-png.dto';
import {UpdatePngDto} from './dto/update-png.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {PngDocument} from './entities/png.entity';
import {Png} from '@models/vo/png';

@Injectable()
export class PngService {
  constructor(
    @InjectModel(Png.name) private model: Model<PngDocument>
  ) {
  }

  create(dto: CreatePngDto, user: string) {
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

  update(id: string, dto: UpdatePngDto) {
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
      return this.model.findByIdAndDelete(id);
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }
}
