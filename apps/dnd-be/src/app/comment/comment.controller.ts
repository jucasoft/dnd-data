import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {CommentService} from './comment.service';
import {CreateCommentDto} from './dto/create-comment.dto';
import {AuthGuard} from '@nestjs/passport';
import {UpdateSpellsInventoryDto} from '../spells-inventory/dto/update-spells-inventory.dto';
import {SpellsInventory} from '../spells-inventory/entities/spells-inventory.entity';

@Controller('comment')
export class CommentController {
  constructor(private readonly service: CommentService) {
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() dto: CreateCommentDto, @Req() req) {
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
