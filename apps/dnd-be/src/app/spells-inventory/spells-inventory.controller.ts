import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {SpellsInventoryService} from './spells-inventory.service';
import {CreateSpellsInventoryDto} from './dto/create-spells-inventory.dto';
import {UpdateSpellDto} from '../spell/dto/update-spell.dto';
import {SpellsInventory} from './entities/spells-inventory.entity';

@Controller('spells-inventory')
export class SpellsInventoryController {
  constructor(private readonly service: SpellsInventoryService) {
  }

  @Post()
  create(@Body() createSpellsInventoryDto: CreateSpellsInventoryDto) {
    return this.service.create(createSpellsInventoryDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSpellDto: UpdateSpellDto): Promise<SpellsInventory> {
    return this.service.update(id, updateSpellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
