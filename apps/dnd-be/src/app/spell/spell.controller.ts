import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {SpellService} from './spell.service';
import {CreateSpellDto} from './dto/create-spell.dto';
import {UpdateSpellDto} from './dto/update-spell.dto';
import {AuthGuard} from '@nestjs/passport';

@Controller('spell')
export class SpellController {
  constructor(private readonly service: SpellService) {
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() dto: CreateSpellDto, @Req() req) {
    return this.service.create(dto, req.user.sub);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req) {
    return this.service.findAll(req.user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSpellDto: UpdateSpellDto) {
    return this.service.update(id, updateSpellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
