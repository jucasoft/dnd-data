import { Injectable } from '@nestjs/common';
import { CreatePngDto } from './dto/create-png.dto';
import { UpdatePngDto } from './dto/update-png.dto';

@Injectable()
export class PngService {
  create(createPngDto: CreatePngDto) {
    return 'This action adds a new png';
  }

  findAll() {
    return `This action returns all png`;
  }

  findOne(id: number) {
    return `This action returns a #${id} png`;
  }

  update(id: number, updatePngDto: UpdatePngDto) {
    return `This action updates a #${id} png`;
  }

  remove(id: number) {
    return `This action removes a #${id} png`;
  }
}
