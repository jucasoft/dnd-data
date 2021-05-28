export class ClassLevel {
  public class: string = undefined; // 'Cleric', 'Paladin', 'Savant'
  public level: number = undefined;

  static toStringList = (classLevels: ClassLevel[]): string => {
    return classLevels.map((value: ClassLevel) => `${value.class} (${value.level})`).join(', ')
  }

}
