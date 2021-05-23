import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {PngService} from './png.service';
import {CreatePngDto} from './dto/create-png.dto';
import {UpdatePngDto} from './dto/update-png.dto';
import {AuthGuard} from '@nestjs/passport';

@Controller('png')
export class PngController {
  constructor(private readonly service: PngService) {
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() dto: CreatePngDto, @Req() req) {
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
  update(@Param('id') id: string, @Body() updatePngDto: UpdatePngDto) {
    return this.service.update(id, updatePngDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
