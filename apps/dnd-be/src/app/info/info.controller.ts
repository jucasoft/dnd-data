import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {InfoService} from './info.service';
import {CreateInfoDto} from './dto/create-info.dto';
import {AuthGuard} from '@nestjs/passport';
import {UpdateSpellsInventoryDto} from '../spells-inventory/dto/update-spells-inventory.dto';
import {SpellsInventory} from '../spells-inventory/entities/spells-inventory.entity';

@Controller('info')
export class InfoController {
  constructor(private readonly service: InfoService) {
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() dto: CreateInfoDto, @Req() req) {
    dto.user = req.user.sub;
    return this.service.create(dto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req) {
    const user = req.user.sub;
    return this.service.findAll({user});
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
