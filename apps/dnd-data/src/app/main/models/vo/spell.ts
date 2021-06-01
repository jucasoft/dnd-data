import {Rulebook} from '@models/vo/rulebook';
import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {Info} from '@models/vo/info';

export class Spell {
  public _id: string = undefined;
  public id: string = undefined;
  public name: string = undefined;
  public source: Rulebook = undefined; // filtrare
  public schools: string[] = undefined; // da filtrare
  public subschools: string[] = undefined;
  public descriptors: string[] = undefined;
  public classLevels: ClassLevel[] = undefined; // da filtrare
  public domainLevels: DomainLevel[] = undefined; // deve andare in OR
  public components: string[] = undefined;
  public castingTime: string = undefined;
  public range: string = undefined;
  public area: string = undefined;
  public target: string = undefined;
  public effect: string = undefined;
  public duration: string = undefined;
  public savingThrow: string = undefined;
  public spellResistance: string = undefined;
  public description: string = undefined;
  public spells: SpellsInventory = undefined;
  public info: Info = undefined;
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

