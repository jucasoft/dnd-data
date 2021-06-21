import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ClassLevel} from '../../model/class-level';
import {DomainLevel} from '../../model/domain-level';
import {Source} from '../../model/source';
import {SpellsInventory} from '../../spells-inventory/entities/spells-inventory.entity';
import {Field, ObjectType} from '@nestjs/graphql';
import {Schema as MongooseSchema} from 'mongoose';

export type SpellDocument = any & Spell & Document;

@ObjectType()
@Schema({collection: 'spellsDictionary'})
export class Spell {
  @Field(() => String)
  public _id: MongooseSchema.Types.ObjectId;
  public __v: number = undefined;

  @Field(() => String)
  @Prop()
  public area: string = undefined;

  @Prop()
  public castingTime: string = undefined;
  @Prop()
  public classLevels: ClassLevel = undefined;
  @Prop()
  public components: string[] = undefined;
  @Prop()
  public description: string = undefined;
  @Prop()
  public descriptors: string[] = undefined;
  @Prop()
  public domainLevels: DomainLevel[] = undefined;
  @Prop()
  public duration: string = undefined;
  @Prop()
  public effect: string = undefined;
  @Prop()
  public id: string = undefined;
  @Prop()
  public name: string = undefined;
  @Prop()
  public range: string = undefined;
  @Prop()
  public savingThrow: string = undefined;
  @Prop()
  public schools: string[] = undefined;
  @Prop()
  public source: Source = undefined;
  @Prop()
  public spellResistance: string = undefined;
  @Prop()
  public spells: SpellsInventory = undefined;
  @Prop()
  public subschools: string[] = undefined;
  @Prop()
  public target: string = undefined;
}

export const SpellSchema = SchemaFactory.createForClass(Spell);
