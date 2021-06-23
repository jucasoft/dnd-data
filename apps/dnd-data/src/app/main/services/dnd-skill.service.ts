import {Injectable} from '@angular/core';
import {DndSkill} from '@models/vo/dnd-skill';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSkillService extends DndBaseService<DndSkill> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-skill';
}
