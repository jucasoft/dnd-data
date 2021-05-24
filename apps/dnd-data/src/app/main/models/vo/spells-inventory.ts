export class SpellsInventory {
  public _id: any = undefined;
  public spellsDictionaryId: string = undefined;
  public pngId: string = undefined;
  public qt: number = 0;
  public user: string = undefined;
  public note: string = undefined;
  public stars: number = undefined;
  static selectId: (item: SpellsInventory) => string = item => item._id;
}
