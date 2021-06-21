import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DndDomainService } from './dnd-domain.service';
import { DndDomain } from './entities/dnd-domain.entity';
import { CreateDndDomainInput } from './dto/create-dnd-domain.input';
import { UpdateDndDomainInput } from './dto/update-dnd-domain.input';

@Resolver(() => DndDomain)
export class DndDomainResolver {
  constructor(private readonly dndDomainService: DndDomainService) {}

  @Mutation(() => DndDomain)
  createDndDomain(@Args('createDndDomainInput') createDndDomainInput: CreateDndDomainInput) {
    return this.dndDomainService.create(createDndDomainInput);
  }

  @Query(() => [DndDomain], { name: 'dndDomain' })
  findAll() {
    return this.dndDomainService.findAll();
  }

  @Query(() => DndDomain, { name: 'dndDomain' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dndDomainService.findOne(id);
  }

  @Mutation(() => DndDomain)
  updateDndDomain(@Args('updateDndDomainInput') updateDndDomainInput: UpdateDndDomainInput) {
    return this.dndDomainService.update(updateDndDomainInput.id, updateDndDomainInput);
  }

  @Mutation(() => DndDomain)
  removeDndDomain(@Args('id', { type: () => Int }) id: number) {
    return this.dndDomainService.remove(id);
  }
}
