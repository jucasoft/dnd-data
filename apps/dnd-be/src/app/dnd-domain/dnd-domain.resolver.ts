import {Args, Int, Query, Resolver} from '@nestjs/graphql';
import {DndDomainService} from './dnd-domain.service';
import {DndDomain} from './entities/dnd-domain.entity';

@Resolver(of => DndDomain)
export class DndDomainResolver {
  constructor(private readonly service: DndDomainService) {
  }

  // @Mutation(() => DndDomain)
  // createDndDomain(@Args('createDndDomainInput') createDndDomainInput: CreateDndDomainInput) {
  //   return this.dndDomainService.create(createDndDomainInput);
  // }

  @Query(() => DndDomain, {name: 'dndDomain', nullable: true})
  findAll(@Args('id', {type: () => Int}) id: number): any {
    const level1 = new DndDomain();
    level1.exampleField = id;
    return level1;
  }

  // @Query(() => DndDomain, { name: 'dndDomain' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.dndDomainService.findOne(id);
  // }
  //
  // @Mutation(() => DndDomain)
  // updateDndDomain(@Args('updateDndDomainInput') updateDndDomainInput: UpdateDndDomainInput) {
  //   return this.dndDomainService.update(updateDndDomainInput.id, updateDndDomainInput);
  // }
  //
  // @Mutation(() => DndDomain)
  // removeDndDomain(@Args('id', { type: () => Int }) id: number) {
  //   return this.dndDomainService.remove(id);
  // }
}
