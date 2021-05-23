import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type PngDocument = any & Png & Document;

@Schema({collection: 'png'})
export class Png {
  public _id: any = undefined;
  public __v: number = undefined;
  @Prop() public name: string = undefined;
  @Prop() public clazz: string = undefined;
  @Prop() public user: string = undefined;
}

export const PngSchema = SchemaFactory.createForClass(Png);
