import { PartialType } from '@nestjs/swagger';
import { CreatePngDto } from './create-png.dto';

export class UpdatePngDto extends PartialType(CreatePngDto) {}
