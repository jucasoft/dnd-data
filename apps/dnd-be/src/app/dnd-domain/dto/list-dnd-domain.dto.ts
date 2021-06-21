import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ListDndDomainDto {
  @Field(() => String, {nullable: true})
  _id?: any;

  @Field(() => String, {nullable: true})
  name?: string;
}
