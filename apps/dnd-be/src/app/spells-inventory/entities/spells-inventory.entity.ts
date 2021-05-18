import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type SpellsInventoryDocument = any & SpellsInventory & Document;

@Schema({collection: 'spellsInventory'})
export class SpellsInventory {
  public _id: any = undefined;
  @Prop() public spellsDictionaryId: string = undefined;
  @Prop() public qt: number = undefined;
  @Prop() public user: number = undefined;
  @Prop() public note: string = undefined;
  @Prop() public stars: number = undefined;
}

export const SpellsInventorySchema = SchemaFactory.createForClass(SpellsInventory);
