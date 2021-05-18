import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PngService } from './png.service';
import { CreatePngDto } from './dto/create-png.dto';
import { UpdatePngDto } from './dto/update-png.dto';

@Controller('png')
export class PngController {
  constructor(private readonly pngService: PngService) {}

  @Post()
  create(@Body() createPngDto: CreatePngDto) {
    return this.pngService.create(createPngDto);
  }

  @Get()
  findAll() {
    return this.pngService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pngService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePngDto: UpdatePngDto) {
    return this.pngService.update(+id, updatePngDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pngService.remove(+id);
  }
}
