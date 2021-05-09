import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {Rulebook} from '@models/vo/rulebook';
import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';

@Entity()
export class Spell {
  @PrimaryGeneratedColumn() public id: string = undefined;
  @Column() public name: string = undefined;
  @Column() public source: Rulebook = undefined;
  @Column() public schools: string[] = undefined; // 'Enchantment'
  @Column() public subschools: string[] = undefined; // 'Compulsion'
  @Column() public descriptors: string[] = undefined; // 'Mind-Affecting'
  @Column() public classLevels: ClassLevel[] = undefined;
  @Column() public domainLevels: DomainLevel[] = undefined;
  @Column() public components: string[] = undefined; // 'Verbal','Somatic','Divine Focus'
  @Column() public castingTime: string = undefined;
  @Column() public range: string = undefined;
  @Column() public area: string = undefined;
  @Column() public target: string = undefined;
  @Column() public effect: string = undefined;
  @Column() public duration: string = undefined;
  @Column() public savingThrow: string = undefined;
  @Column() public spellResistance: string = undefined;
  @Column() public description: string = undefined;
}
