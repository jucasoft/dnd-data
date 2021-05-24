import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {SpellsInventoryService} from './spells-inventory.service';
import {CreateSpellsInventoryDto} from './dto/create-spells-inventory.dto';
import {UpdateSpellDto} from '../spell/dto/update-spell.dto';
import {SpellsInventory} from './entities/spells-inventory.entity';
import {AuthGuard} from '@nestjs/passport';

@Controller('spells-inventory')
export class SpellsInventoryController {
  constructor(private readonly service: SpellsInventoryService) {
  }

  @Post()
  create(@Body() createSpellsInventoryDto: CreateSpellsInventoryDto) {
    return this.service.create(createSpellsInventoryDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req) {
    const pngId = req.query.pngId;
    const user = req.user.sub;
    return this.service.findAll({pngId, user});
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateSpellDto: UpdateSpellDto): Promise<SpellsInventory> {
    return this.service.update(id, updateSpellDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
