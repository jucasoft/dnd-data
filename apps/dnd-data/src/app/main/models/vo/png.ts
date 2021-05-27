import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';

export class Png {
  public _id?: string = undefined;
  public name: string = undefined;
  public user: string = undefined;
  public classLevels: ClassLevel[] = undefined;
  public domainLevels: DomainLevel[] = undefined;


  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: Png) => string = item => item._id;
  static newItem: (item: Png) => Png = ({_id, ...item}) => ({...item});
}
