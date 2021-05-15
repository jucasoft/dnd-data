import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpellService } from './spell.service';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';

@Controller('spell')
export class SpellController {
  constructor(private readonly spellService: SpellService) {}

  @Post()
  create(@Body() item: CreateSpellDto) {
    return this.spellService.create(item);
  }

  @Get()
  findAll() {
    console.log('SpellController.findAll()');
    return this.spellService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spellService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpellDto: UpdateSpellDto) {
    return this.spellService.update(+id, updateSpellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spellService.remove(+id);
  }
}
