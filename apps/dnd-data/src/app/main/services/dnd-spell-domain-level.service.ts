import {Injectable} from '@angular/core';
import {DndSpellDomainLevel} from '@models/vo/dnd-spell-domain-level';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSpellDomainLevelService extends DndBaseService<DndSpellDomainLevel> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-spell-domain-level';
}
