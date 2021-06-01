import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ClassLevel} from '../../model/class-level';
import {DomainLevel} from '../../model/domain-level';

export type PgDocument = any & Pg & Document;

@Schema({collection: 'pg'})
export class Pg {
  public _id: any = undefined;
  public __v: number = undefined;
  @Prop() public name: string = undefined;
  @Prop() public user: string = undefined;
  @Prop() public classLevels: ClassLevel[] = undefined;
  @Prop() public domainLevels: DomainLevel[] = undefined;
  @Prop() public rulebooks: string[] = undefined;
  @Prop() public schools: string[] = undefined;
}

export const PgSchema = SchemaFactory.createForClass(Pg);
