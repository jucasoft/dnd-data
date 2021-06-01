import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {PgService} from './pg.service';
import {CreatePgDto} from './dto/create-pg.dto';
import {UpdatePgDto} from './dto/update-pg.dto';
import {AuthGuard} from '@nestjs/passport';

@Controller('pg')
export class PgController {
  constructor(private readonly service: PgService) {
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() dto: CreatePgDto, @Req() req) {
    dto.user = req.user.sub;
    return this.service.create(dto, req.user.sub);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req) {
    return this.service.findAll(req.user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePgDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
