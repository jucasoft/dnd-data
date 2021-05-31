export class Comment {
  public _id: any = undefined;
  public spellsDictionaryId: string = undefined;
  public user: string = undefined;
  public note: string = undefined;
  public score: number = undefined;
  static selectId: (item: Comment) => string = item => item._id;
}
