export class DomainLevel {
  public domain: string = undefined; // 'Inquisition',
  public level: number = undefined;

  static toStringList = (classLevels: DomainLevel[]): string => {
    return classLevels.map((value: DomainLevel) => value.domain).join(', ')
  }
}
