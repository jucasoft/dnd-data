export class SpellsInventory {
  public _id: any = undefined;
  public spellsDictionaryId: string = undefined;
  public pgId: string = undefined;
  public qt: number = 0;
  public user: string = undefined;
  static selectId: (item: SpellsInventory) => string = item => item._id;
}
