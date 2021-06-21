import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDndDomainInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
