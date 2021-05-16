import { PartialType } from '@nestjs/swagger';
import { CreateSpellsInventoryDto } from './create-spells-inventory.dto';

export class UpdateSpellsInventoryDto extends PartialType(CreateSpellsInventoryDto) {}
