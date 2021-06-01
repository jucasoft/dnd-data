import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {SpellsInventoryService} from './spells-inventory.service';
import {CreateSpellsInventoryDto} from './dto/create-spells-inventory.dto';
import {SpellsInventory} from './entities/spells-inventory.entity';
import {AuthGuard} from '@nestjs/passport';
import {UpdateSpellsInventoryDto} from './dto/update-spells-inventory.dto';

@Controller('spells-inventory')
export class SpellsInventoryController {
  constructor(private readonly service: SpellsInventoryService) {
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() dto: CreateSpellsInventoryDto, @Req() req) {
    dto.user = req.user.sub;
    return this.service.create(dto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req) {
    const pgId = req.query.pgId;
    const user = req.user.sub;
    return this.service.findAll({pgId, user});
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() dto: UpdateSpellsInventoryDto): Promise<SpellsInventory> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
