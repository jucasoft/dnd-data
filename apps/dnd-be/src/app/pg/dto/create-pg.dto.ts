import {ClassLevel} from '../../model/class-level';
import {DomainLevel} from '../../model/domain-level';

export class CreatePgDto {
  public name: string = undefined;
  public user: string = undefined;
  public classLevels: ClassLevel[] = undefined;
  public domainLevels: DomainLevel[] = undefined;
}
