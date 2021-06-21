import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Test } from './entities/test.entity';

@Resolver(() => Test)
export class TestResolver {
  @Query(() => Test, { name: 'test' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    const result = new Test();
    result.exampleField = id;
    return result;
  }
}
