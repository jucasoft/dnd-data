import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ClassLevel} from '../../model/class-level';
import {DomainLevel} from '../../model/domain-level';

export type PngDocument = any & Png & Document;

@Schema({collection: 'png'})
export class Png {
  public _id: any = undefined;
  public __v: number = undefined;
  @Prop() public name: string = undefined;
  @Prop() public user: string = undefined;
  @Prop() public classLevels: ClassLevel[] = undefined;
  @Prop() public domainLevels: DomainLevel[] = undefined;
}

export const PngSchema = SchemaFactory.createForClass(Png);
