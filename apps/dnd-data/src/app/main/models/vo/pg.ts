import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';
import {Dictionary} from '@ngrx/entity';

export class Pg {
  public _id?: string = undefined;
  public name: string = undefined;
  public user: string = undefined;
  public classLevels: ClassLevel[] = undefined;
  // mappa locale key/val => class/level
  public classLevelsMap: Dictionary<number> = undefined;
  public domainLevels: DomainLevel[] = undefined;
  // mappa locale key/val => domain/level
  public domainLevelsMap: Dictionary<number> = undefined;


  static classLevelsToMap = (values: ClassLevel[]) => {
    return values ? values.reduce((prev, curr: ClassLevel) => {
      prev[curr.class] = curr.level;
      return prev
    }, {}) : {}
  }

  static domainLevelsToMap = (values: DomainLevel[]) => {
    return values ? values.reduce((prev, curr: DomainLevel) => {
      prev[curr.domain] = curr.level;
      return prev
    }, {}) : {};
  }

  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: Pg) => string = item => item._id;
  static newItem: (item: Pg) => Pg = ({_id, ...item}) => ({...item});
}
