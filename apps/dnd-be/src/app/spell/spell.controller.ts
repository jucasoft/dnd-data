import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {SpellService} from './spell.service';
import {CreateSpellDto} from './dto/create-spell.dto';
import {UpdateSpellDto} from './dto/update-spell.dto';
import {AuthGuard} from '@nestjs/passport';

@Controller('spell')
export class SpellController {
  constructor(private readonly spellService: SpellService) {
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() item: CreateSpellDto, @Req() req) {
    console.log('SpellController.create()');
    console.log('req.user', req.user.sub);
    return this.spellService.create(item, req.user.sub);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req) {
    console.log('SpellController.findAll()');
    console.log('req.user', req.user.sub);
    return this.spellService.findAll(req.user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spellService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSpellDto: UpdateSpellDto) {
    return this.spellService.update(id, updateSpellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spellService.remove(+id);
  }
}
