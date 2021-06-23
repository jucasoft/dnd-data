import {Query, Resolver} from '@nestjs/graphql';
import {DndDomainService} from './dnd-domain.service';
import {DndDomain} from './entities/dnd-domain.entity';
import {Observable, of} from 'rxjs';

@Resolver(of => DndDomain)
export class DndDomainResolver {
  constructor(private readonly service: DndDomainService) {
  }

  // @Mutation(() => DndDomain)
  // createDndDomain(@Args('createDndDomainInput') createDndDomainInput: CreateDndDomainInput) {
  //   return this.dndDomainService.create(createDndDomainInput);
  // }

  @Query(() => [DndDomain], {name: 'dndDomain', nullable: true})
  findAll(): Observable<DndDomain[]> {
    const result = new DndDomain();
    result.name = 'name';
    result.slug = 'slug';
    return of([result]);
  }

  // @Query(() => DndDomain, { name: 'dndDomain' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.dndDomainService.findOne(id);
  // }

}
