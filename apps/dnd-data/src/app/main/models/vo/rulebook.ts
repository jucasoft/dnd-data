export class Rulebook {
  public rulebook: string = undefined;
  public page: number = undefined;

  static toString = (value: Rulebook): string => {
    return `${value.rulebook}, page ${value.page}`
  }

}
