import { CreateDndDomainInput } from './create-dnd-domain.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDndDomainInput extends PartialType(CreateDndDomainInput) {
  @Field(() => Int)
  id: number;
}
