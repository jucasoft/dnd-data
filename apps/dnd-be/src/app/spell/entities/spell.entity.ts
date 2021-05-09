import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type SpellDocument = any & Spell & Document;

@Schema()
export class Spell {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const SpellSchema = SchemaFactory.createForClass(Spell);
