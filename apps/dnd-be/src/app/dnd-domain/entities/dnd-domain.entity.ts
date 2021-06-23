import {Field, ObjectType} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Schema as MongooseSchema} from 'mongoose';

@ObjectType()
@Schema({collection: 'dndDomain'})
export class DndDomain {
  @Field(() => String)
  public _id: MongooseSchema.Types.ObjectId;
  public __v: number = undefined;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  slug: string;
}

export type DndDomainDocument = DndDomain & Document;

export const DndDomainSchema = SchemaFactory.createForClass(DndDomain);
