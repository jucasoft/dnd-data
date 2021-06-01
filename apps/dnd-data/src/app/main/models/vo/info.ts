export class Info {
  public _id: any = undefined;
  public spellsDictionaryId: string = undefined;
  public user: string = undefined;
  public note: string = undefined;
  public score: number = undefined;
  static selectId: (item: Info) => string = item => item._id;
}
