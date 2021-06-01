import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type SpellsInventoryDocument = any & SpellsInventory & Document;

@Schema({collection: 'spellsInventory'})
export class SpellsInventory {
  public _id: any = undefined;
  @Prop() public spellsDictionaryId: string = undefined;
  @Prop() public pgId: string = undefined;
  @Prop() public qt: number = undefined;
  @Prop() public user: string = undefined;
}

export const SpellsInventorySchema = SchemaFactory.createForClass(SpellsInventory);
