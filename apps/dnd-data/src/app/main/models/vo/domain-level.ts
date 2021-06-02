import {evalData} from '@core/utils/j-utils';

export class DomainLevel {
  public domain: string = undefined; // 'Inquisition',
  public level: number = undefined;

  static toStringList = (classLevels: DomainLevel[]): string => {
    return evalData(() => classLevels.map((value: DomainLevel) => value.domain).join(', '), '');
  }
}
