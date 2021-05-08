export class SpellMetaInfo {
  public id: string = undefined;
  public spellId: string = undefined;
  public user: string = undefined;

  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: SpellMetaInfo) => string = item => item.id;
}
