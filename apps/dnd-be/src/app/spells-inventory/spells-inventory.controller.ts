import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpellsInventoryService } from './spells-inventory.service';
import { CreateSpellsInventoryDto } from './dto/create-spells-inventory.dto';
import { UpdateSpellsInventoryDto } from './dto/update-spells-inventory.dto';

@Controller('spells-inventory')
export class SpellsInventoryController {
  constructor(private readonly spellsInventoryService: SpellsInventoryService) {}

  @Post()
  create(@Body() createSpellsInventoryDto: CreateSpellsInventoryDto) {
    return this.spellsInventoryService.create(createSpellsInventoryDto);
  }

  @Get()
  findAll() {
    return this.spellsInventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spellsInventoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpellsInventoryDto: UpdateSpellsInventoryDto) {
    return this.spellsInventoryService.update(+id, updateSpellsInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spellsInventoryService.remove(+id);
  }
}
