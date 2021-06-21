import { Module } from '@nestjs/common';
import { DndDomainService } from './dnd-domain.service';
import { DndDomainResolver } from './dnd-domain.resolver';

@Module({
  providers: [DndDomainResolver, DndDomainService]
})
export class DndDomainModule {}
