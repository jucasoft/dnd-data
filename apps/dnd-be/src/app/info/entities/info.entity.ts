import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type InfoDocument = any & Info & Document;

@Schema({collection: 'info'})
export class Info {
  public _id: any = undefined;
  @Prop() public spellsDictionaryId: string = undefined;
  @Prop() public user: string = undefined;
  @Prop() public note: string = undefined;
  @Prop() public score: number = undefined;
}

export const InfoSchema = SchemaFactory.createForClass(Info);
