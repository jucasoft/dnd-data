export class SpellsInventory {
  public _id: any = undefined;
  public spellsDictionaryId: string = undefined;
  public qt: number = undefined;
  public user: number = undefined;
  public note: string = undefined;
  public stars: number = undefined;
  static selectId: (item: SpellsInventory) => string = item => item._id;
}
