import { PartialType } from '@nestjs/swagger';
import { CreatePgDto } from './create-pg.dto';

export class UpdatePgDto extends PartialType(CreatePgDto) {}
