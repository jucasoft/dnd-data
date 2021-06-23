import {Injectable} from '@angular/core';
import {DndSkillVariant} from '@models/vo/dnd-skill-variant';
import {environment} from '../../../environments/environment';
import {DndBaseService} from '@services/dnd-base.service';

@Injectable({
	providedIn: 'root'
})
export class DndSkillVariantService extends DndBaseService<DndSkillVariant> {
 public service = environment.webServiceUri;
  public endPoint = 'dnd-skill-variant';
}
