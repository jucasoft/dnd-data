import { PartialType } from '@nestjs/mapped-types';
import { CreateSpellDto } from './create-spell.dto';

export class UpdateSpellDto extends PartialType(CreateSpellDto) {}
