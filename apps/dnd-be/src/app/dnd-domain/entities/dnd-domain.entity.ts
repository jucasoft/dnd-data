import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DndDomain {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
