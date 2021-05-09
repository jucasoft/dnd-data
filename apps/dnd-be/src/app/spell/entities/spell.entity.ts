import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Rulebook} from '@models/vo/rulebook';
import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';

export type SpellDocument = any & Spell & Document;

@Schema()
export class Spell {
  @Prop() public id: string = undefined;
  @Prop() public name: string = undefined;
  @Prop() public source: Rulebook = undefined;
  @Prop() public schools: string[] = undefined; // 'Enchantment'
  @Prop() public subschools: string[] = undefined; // 'Compulsion'
  @Prop() public descriptors: string[] = undefined; // 'Mind-Affecting'
  @Prop() public classLevels: ClassLevel[] = undefined;
  @Prop() public domainLevels: DomainLevel[] = undefined;
  @Prop() public components: string[] = undefined; // 'Verbal','Somatic','Divine Focus'
  @Prop() public castingTime: string = undefined;
  @Prop() public range: string = undefined;
  @Prop() public area: string = undefined;
  @Prop() public target: string = undefined;
  @Prop() public effect: string = undefined;
  @Prop() public duration: string = undefined;
  @Prop() public savingThrow: string = undefined;
  @Prop() public spellResistance: string = undefined;
  @Prop() public description: string = undefined;
}

export const SpellSchema = SchemaFactory.createForClass(Spell);
