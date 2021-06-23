import {Injectable} from '@angular/core';
import {DndFeatRequiresSkill} from '@models/vo/dnd-feat-requires-skill';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndFeatRequiresSkillService extends DndBaseService<DndFeatRequiresSkill> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-feat-requires-skill';
}
