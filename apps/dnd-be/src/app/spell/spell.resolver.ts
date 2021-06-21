import {Args, Query, Resolver} from '@nestjs/graphql';
import {SpellService} from './spell.service';
import {Spell} from './entities/spell.entity';

@Resolver(() => Spell)
export class SpellResolver {
  constructor(private readonly service: SpellService) {
  }

  @Query(() => [Spell], {name: 'spell'})
  async findOne(@Args('_id', {type: () => String}) _id: string) {
    return this.service.findAll(_id);
  }

  //
  // @Query(() => [DndDomain])
  // find(
  //   @Args('filter', {nullable: true}) filter?: ListDndDomainDto,
  // ) {
  //   return this.service.find(filter);
  // }

}
