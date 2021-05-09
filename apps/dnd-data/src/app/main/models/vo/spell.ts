import {Rulebook} from '@models/vo/rulebook';
import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';

export class Spell {
  public _id: string = undefined;
  public id: string = undefined;
  public name: string = undefined;
  public source: Rulebook = undefined;
  public schools: string[] = undefined; // 'Enchantment'
  public subschools: string[] = undefined; // 'Compulsion'
  public descriptors: string[] = undefined; // 'Mind-Affecting'
  public classLevels: ClassLevel[] = undefined;
  public domainLevels: DomainLevel[] = undefined;
  public components: string[] = undefined; // 'Verbal','Somatic','Divine Focus'
  public castingTime: string = undefined;
  public range: string = undefined;
  public area: string = undefined;
  public target: string = undefined;
  public effect: string = undefined;
  public duration: string = undefined;
  public savingThrow: string = undefined;
  public spellResistance: string = undefined;
  public description: string = undefined;
  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: Spell) => string = item => item._id;
  static plantId: (item: Spell, id: any) => Spell = (item, id) => {
    item._id = id;
    return item;
  }
}

